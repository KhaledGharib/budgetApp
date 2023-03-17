import { getAuth, signInWithPopup, signOut } from "@firebase/auth";
import { googleProvider } from "../db/firebase";

export const login = (uid) => ({
  type: "LOGIN",
  uid,
});

export const startLogin = () => {
  const auth = getAuth();
  return () => {
    return signInWithPopup(auth, googleProvider);
  };
};

export const logout = () => ({
  type: "LOGOUT",
});

export const startLogout = () => {
  const auth = getAuth();

  return () => {
    return signOut(auth);
  };
};
