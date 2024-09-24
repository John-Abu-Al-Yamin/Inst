import  { useState, useEffect } from "react";
import {
  collection,
  Firestore,
  getDocs,
  query,
  where,
} from "firebase/firestore";
import useShowToast from "./useShowToast";
import userProfileStore from "../store/userProfileStore";

const useGetUserProfileByUsername = (username) => {
  const [isLoading, setIsLoading] = useState(true);
  const showToast = useShowToast();

  const { userProfile, setUserProfile } = userProfileStore();
  useEffect(() => {
    const getUserProfile = async () => {
      setIsLoading(true);
      try {
        const q = query(
          collection(Firestore, "users"),
          where("username", "==", username)
        );
        const querySnapshot = await getDocs(q);

        if (querySnapshot.empty) return setUserProfile(null);
        let userDoc;
        querySnapshot.forEach((doc) => {
          userDoc = doc.data();
        });
        setUserProfile(userDoc);
      } catch (error) {
        console.log(error);
        showToast("Error", error.message, "error");
      }
    };

    getUserProfile();
  }, [setUserProfile, showToast, username]);

  return { isLoading , userProfile };
};

export default useGetUserProfileByUsername;
