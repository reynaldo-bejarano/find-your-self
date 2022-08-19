import { onAuthStateChanged } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../firebase";

export const UserContext = createContext();

export default function UserProvider({ children }) {
  const navigate = useNavigate();
  const [currentUser, setCurrentUser] = useState(null);
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    onAuthStateChanged(auth, handleStateChanged);
  }, []);

  const handleStateChanged = (user) => {
    if (user) {
      setCurrentUser(user.uid);
      navigate("/");
    } else {
      setCurrentUser(null);
    }
  };

  return (
    <UserContext.Provider
      value={{
        currentUser,
        setCurrentUser,
        loading,
        setLoading,
        success,
        setSuccess,
      }}
    >
      {children}
    </UserContext.Provider>
  );
}
