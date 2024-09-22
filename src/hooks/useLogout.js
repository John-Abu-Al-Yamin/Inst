import { useSignOut } from "react-firebase-hooks/auth";
import { auth } from "../firebase/firebase";
import useShowToast from "./useShowToast";
import useAuthStore from "../store/authStore";

const useLogout = () => {
  const [signOut, isLoggingOut, error] = useSignOut(auth);
  const showToast = useShowToast();

  const logoutUser = useAuthStore((state) => state.logout);

  const handelLogout = async () => {
    try {
      await signOut();
      localStorage.removeItem("user-info");
      logoutUser();
      showToast("Success", "Logout Successful", "success");
    } catch (error) {
      showToast("Error", error.message, "error");
      console.log(error);
    }
  };

  return { handelLogout, isLoggingOut, error };
};

export default useLogout;
