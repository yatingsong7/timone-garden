import { useState } from "react";
import { createAuthUserWithEmailAndPassword } from "../../utils/firebase.utils";
import { createUserDocumentFromAuth } from "../../utils/firebase.utils";
import FormInput from "../form-input/form-input.component";
import "./sign-up.style.scss";
import Button from "../button/button.component";

const initFormFields = {
  firstname: "",
  lastname: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const SignUp = () => {
  const [formFields, setFormFields] = useState(initFormFields);
  const { firstname, lastname, email, password, confirmPassword } = formFields;

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (password !== confirmPassword) {
      alert("passwords do not match");
      return;
    }

    try {
      const { user } = await createAuthUserWithEmailAndPassword(
        email,
        password
      );
      var displayName = firstname + " " + lastname;
      await createUserDocumentFromAuth(user, { displayName: displayName });
      resetForm();
    } catch (error) {
      if (error.code === "auth/email-already-in-use") {
        alert("The email is already used");
      } else {
        console.log(error);
      }
    }
  };

  const resetForm = () => {
    setFormFields(initFormFields);
  };

  return (
    <div className="sign-up-container">
      <h1>Sign up a new account</h1>
      <form onSubmit={handleSubmit}>
        <FormInput
          label="Firstname"
          type="text"
          name="firstname"
          onChange={handleChange}
          value={firstname}
        />
        <FormInput
          label="Lastname"
          type="text"
          name="lastname"
          onChange={handleChange}
          value={lastname}
        />
        <FormInput
          label="Email"
          type="email"
          name="email"
          onChange={handleChange}
          value={email}
        />
        <FormInput
          label="Password"
          type="password"
          name="password"
          onChange={handleChange}
          value={password}
        />
        <FormInput
          label="Confirm Password"
          type="password"
          name="confirmPassword"
          onChange={handleChange}
          value={confirmPassword}
        />

        <Button type="submit" buttonType="default">
          Sign Up
        </Button>
      </form>
    </div>
  );
};

export default SignUp;
