import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { UserContext } from "../../context/UserProvider";

export default function RequireAuth({ children }) {
  const { currentUser } = useContext(UserContext);

  if (currentUser === null) {
    return <Navigate to="/login" />;
  }

  return children;
}
