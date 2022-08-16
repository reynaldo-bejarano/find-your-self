import { auth } from "../firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";

const UserWithEmailAndPassword = async (email, password) => {
  await createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      console.log(user.email);
    })
    .catch((error) => {
      console.log(error.message);
    });
};

export { UserWithEmailAndPassword };
