import { useState } from "react";
import { createAuthUserWithEmailAndPassword } from "../../utils/firebase.utils";
import { createUserDocumentFromAuth } from "../../utils/firebase.utils";

const initFormFields = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const SignUp = () => {
  const [formFields, setFormFields] = useState(initFormFields);
  const { displayName, email, password, confirmPassword } = formFields;

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
    <div>
      <h1>Sign up a new account</h1>
      <form onSubmit={handleSubmit}>
        <label>Prefered Name</label>
        <input
          type="text"
          name="displayName"
          onChange={handleChange}
          value={displayName}
        />
        <label>Email</label>
        <input
          type="email"
          name="email"
          onChange={handleChange}
          value={email}
        />
        <label>Password</label>
        <input
          type="password"
          name="password"
          onChange={handleChange}
          value={password}
        />
        <label>Confirm Password</label>
        <input
          type="password"
          name="confirmPassword"
          onChange={handleChange}
          value={confirmPassword}
        />
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default SignUp;
