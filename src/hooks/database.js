import { auth } from "../firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";

const CreateEmailAndPassword = async (email, password) => {
  await createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      console.log(user.email);
    })
    .catch((error) => {
      console.log(error.message);
    });
};

const LoginWithEmailAndPassword = async (email, password) => {
  await signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
    })
    .catch((error) => {
      console.log(error.message);
    });
};

const UserSignOut = async () => {
  try {
    await signOut(auth);
  } catch (error) {
    console.log(error.message);
  }
};

export { CreateEmailAndPassword, LoginWithEmailAndPassword, UserSignOut };
