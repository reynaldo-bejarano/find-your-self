import { useContext } from "react";
import BasicButton from "../components/buttons/BasicButton";
import { UserContext } from "../context/UserProvider";
import { UserSignOut } from "../hooks/database";

export default function Home() {

  const handleUserSignOut = async () => {
    try {
      await UserSignOut();
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div>
      <BasicButton
        type="button"
        text="logout"
        color="bg-red-600"
        onClick={handleUserSignOut}
      />
    </div>
  );
}
