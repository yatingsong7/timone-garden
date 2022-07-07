import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
} from "../../utils/firebase.utils";
import SignUp from "../sign-up/sign-up.component";

const SignIn = () => {
  const signInWithGoogle = async () => {
    const { user } = await signInWithGooglePopup();
    const userDocRef = await createUserDocumentFromAuth(user);
  };

  return (
    <div>
      <h1>Sign in</h1>
      <button onClick={signInWithGoogle}>Sign in with Google Account</button>
      <SignUp />
    </div>
  );
};

export default SignIn;
