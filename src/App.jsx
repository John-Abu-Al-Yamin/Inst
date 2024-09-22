import { Navigate, Route, Routes } from "react-router-dom";

// Pages
import HomePage from "./Pages/HomePage/HomePage";
import AuthomePage from "./Pages/AuthomePage/AuthomePage";
import PageLayout from "./Layouts/PageLayout";
import ProfilePage from "./Pages/ProfilePage/ProfilePage";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "./firebase/firebase";

function App() {
 
  const [authUser] = useAuthState(auth);


  console.log(authUser)
  return (
    <>
      <PageLayout>
        <Routes>
          <Route path="/" element={ authUser ? <HomePage /> : <Navigate to="/auth" />} />
          <Route path="/auth" element={!authUser ? <AuthomePage /> : <Navigate to="/" /> } />
          <Route path="/:username" element={<ProfilePage />} />
        </Routes>
      </PageLayout>
    </>
  );
}

export default App;
