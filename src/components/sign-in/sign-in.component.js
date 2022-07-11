import { useContext, useState } from "react";
import { UserContext } from "../../context/user.context";
import {
  signInWithGooglePopup,
  signInUserWithEmailAndPassword,
  createUserDocumentFromAuth,
} from "../../utils/firebase.utils";
import FormInput from "../form-input/form-input.component";
import "./sign-in.style.scss";
import Button from "../button/button.component";

const initFormFields = {
  email: "",
  password: "",
};

const SignIn = () => {
  const [formFields, setFormFields] = useState(initFormFields);
  const { email, password } = formFields;

  const { setCurrentUser } = useContext(UserContext);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const { user } = await signInUserWithEmailAndPassword(email, password);
      setCurrentUser(user);
      resetForm();
    } catch (error) {
      switch (error.code) {
        case "auth/wrong-password":
          alert("incorrect password");
          break;
        case "auth/user-not-fount":
          alert("This email does not exist, please sign up first");
          break;
        default:
          console.log(error);
      }
    }
  };

  const resetForm = () => {
    setFormFields(initFormFields);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  const signInWithGoogle = async () => {
    try {
      const { user } = await signInWithGooglePopup();
      await createUserDocumentFromAuth(user);
      setCurrentUser(user);
      resetForm();
    } catch (error) {
      switch (error.code) {
        case "auth/popup-closed-by-user":
          alert("Your sign in is fail");
          break;
        // case "auth/user-not-fount":
        //   alert("This email does not exist, please sign up first");
        //   break;
        default:
          console.log(error);
      }
    }
  };

  return (
    <div className="sign-in-container">
      <h1>Sign in</h1>

      <FormInput
        label="Email"
        type="email"
        name="email"
        onChange={handleChange}
        value={email}
        required
      />
      <FormInput
        label="Password"
        type="password"
        name="password"
        onChange={handleChange}
        value={password}
        required
      />
      <div className="button-group">
        <Button onClick={handleSubmit} buttonType="default">
          Sign in
        </Button>
        <Button onClick={signInWithGoogle} buttonType="google">
          Sign in with Google Account
        </Button>
      </div>
    </div>
  );
};

export default SignIn;
