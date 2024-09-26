import { useState } from "react";
import useAuthStore from "../store/authStore";
import useShowToast from "./useShowToast";
import { firestore, storage } from "../firebase/firebase";
import { ref, uploadString, getDownloadURL } from "firebase/storage";
import { doc, updateDoc } from "firebase/firestore";
import userProfileStore from "../store/userProfileStore";

const useEditeProfile = () => {
  const [isUploading, setIsUploading] = useState(false);
  const authUser = useAuthStore((state) => state.user);
  const setAuthUser = useAuthStore((state) => state.setUser);
  const setUserProfile = userProfileStore((state) => state.setUserProfile);

  const showToast = useShowToast();

  const editeProfile = async (inputs, selectedFile) => {
    if (isUploading) return; // Prevent multiple uploads

    setIsUploading(true);
    let profilePicURL = authUser?.profilePicURL; // Initialize with existing profile picture URL

    const storageRef = ref(storage, `profilePics/${authUser.uid}`);
    const userDocRef = doc(firestore, "users", authUser.uid);

    try {
      // If a new file is selected, upload it and get the URL
      if (selectedFile) {
        await uploadString(storageRef, selectedFile, "data_url");
        profilePicURL = await getDownloadURL(storageRef);
      }

      // Prepare an update object
      const updatedUser = {
        fullName: inputs.fullName || authUser.fullName,
        username: inputs.username || authUser.username,
        bio: inputs.bio || authUser.bio,
      };

      // Only include profilePicURL if a new file was uploaded
      if (profilePicURL !== authUser.profilePicURL) {
        updatedUser.profilePicURL = profilePicURL;
      }

      // Update Firestore document
      await updateDoc(userDocRef, updatedUser);

      // Update local storage and store
      const newUserInfo = { ...authUser, ...updatedUser };
      localStorage.setItem("user-info", JSON.stringify(newUserInfo));
      setAuthUser(newUserInfo);
      setUserProfile(newUserInfo);

      showToast("Success", "Profile updated successfully", "success");
    } catch (err) {
      showToast("Error", err.message, "error");
    } finally {
      setIsUploading(false); // Reset uploading state
    }
  };

  return { editeProfile, isUploading };
};

export default useEditeProfile;
