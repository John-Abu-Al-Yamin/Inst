import { useEffect, useState } from "react";
import useShowToast from "./useShowToast";
import { firestore } from "../firebase/firebase";
import { doc, getDoc } from "firebase/firestore";

const useGetUserProfileById = (userId) => {
  const [isLoading, setIsLoading] = useState(true);
  const [userProfile, setUserProfile] = useState(null);
  const showToast = useShowToast();

  useEffect(() => {
    const getUserProfile = async () => {
      setIsLoading(true);
      setUserProfile(null);

      try {
        const userRef = await getDoc(doc(firestore, "users", userId));
        if (userRef.exists()) {
          setUserProfile(userRef.data());
        }
      } catch (error) {
        showToast("Error", error.message, "error");
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };

    getUserProfile();
  }, [setUserProfile, showToast, userId]);

  return {
    userProfile,
    setUserProfile,
    isLoading,
  };
};

export default useGetUserProfileById;
