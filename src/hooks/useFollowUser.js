import React, { useEffect, useState } from "react";
import useAuthStore from "../store/authStore";
import userProfileStore from "../store/userProfileStore";
import useShowToast from "./useShowToast";
import { arrayRemove, arrayUnion, doc, updateDoc } from "firebase/firestore";
import { firestore } from "../firebase/firebase";

const useFollowUser = (userId) => {
  const [isUpdated, setIsUpdated] = useState(false);
  const [isFollowing, setIsFollowing] = useState(false);
  const authUser = useAuthStore((state) => state.user);
  const setAuthUser = useAuthStore((state) => state.setUser);
  const { userProfile, setUserProfile } = userProfileStore();
  const showToast = useShowToast();

  const handelFollowUser = async () => {
    setIsUpdated(true);
    try {
      const currentUserRef = doc(firestore, "users", authUser.uid);
      const userToFollowOrUnfollowRef = doc(firestore, "users", userId);

      await updateDoc(currentUserRef, {
        following: isFollowing ? arrayRemove(userId) : arrayUnion(userId),
      });

      await updateDoc(userToFollowOrUnfollowRef, {
        followers: isFollowing
          ? arrayRemove(authUser.uid)
          : arrayUnion(authUser.uid),
      });

      const updatedAuthUser = {
        ...authUser,
        following: isFollowing
          ? authUser.following.filter((uid) => uid !== userId)
          : [...authUser.following, userId],
      };
      setAuthUser(updatedAuthUser);
      localStorage.setItem("user-info", JSON.stringify(updatedAuthUser));

      if (userProfile) {
        const updatedUserProfile = {
          ...userProfile,
          followers: isFollowing
            ? userProfile.followers.filter((uid) => uid !== authUser.uid)
            : [...userProfile.followers, authUser.uid],
        };
        setUserProfile(updatedUserProfile);
      }

      setIsFollowing(!isFollowing);
    } catch (error) {
      showToast("Error", error.message, "error");
    } finally {
      setIsUpdated(false);
    }
  };

  useEffect(() => {
    if (authUser) {
      const isFollowing = authUser.following.includes(userId);
      setIsFollowing(isFollowing);
    }
  }, [authUser, userId]);

  return { handelFollowUser, isFollowing, isUpdated };
};

export default useFollowUser;
