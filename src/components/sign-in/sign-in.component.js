import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  signInWithGooglePopup,
  signInUserWithEmailAndPassword,
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
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await signInUserWithEmailAndPassword(email, password);
      resetForm();
      navigate("/")
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
      await signInWithGooglePopup();
      resetForm();
      navigate("/")
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
      <form>
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
          <Button onClick={handleSubmit} buttonType="default" type="submit">
            Sign in
          </Button>
          <Button onClick={signInWithGoogle} buttonType="google" type="button">
            Sign in with Google Account
          </Button>
        </div>
      </form>
      <small>
        Don't have an account?{" "}
        <Link to="/signup">
          <i>Create one!</i>
        </Link>
      </small>
    </div>
  );
};

export default SignIn;
