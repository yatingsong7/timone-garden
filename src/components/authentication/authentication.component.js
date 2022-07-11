import "./authentication.style.scss";
import { Link } from "react-router-dom";
import SignIn from "../sign-in/sign-in.component";

const Authentication = () => {
  return (
    <div className="authentication-container">
      <SignIn />
      <small>
        Don't have an account? <Link to="/signup">Create one!</Link>
      </small>
    </div>
  );
};

export default Authentication;
