import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import firebaseApp from "./firebase";

const auth = getAuth();

class AuthService {
  login() {
    const authProvider = new GoogleAuthProvider();
    return signInWithPopup(auth, authProvider);
  }

  logout() {
    signOut(auth)
      .then(() => {
        console.log(auth);
        return true;
      })
      .catch((error) => {
        console.log(error);
      });
  }

  onAuthChange(onUserChanged) {
    onAuthStateChanged(auth, (user) => {
      onUserChanged(user);
    });
  }
}

export default AuthService;
