import { createContext, useState } from "react";

export const UserContext = createContext();

export default function UserProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(null);
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);

  return (
    <UserContext.Provider
      value={{ currentUser, setCurrentUser, loading, setLoading, success, setSuccess }}
    >
      {children}
    </UserContext.Provider>
  );
}
