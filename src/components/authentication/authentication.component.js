import { Fragment } from "react";
import { Link } from "react-router-dom";
import SignIn from "../sign-in/sign-in.component";

const Authentication = () => {
  return (
    <Fragment>
      <SignIn />
      <small>
        Don't have an account? <Link to="/signup">Create one!</Link>
      </small>
    </Fragment>
  );
};

export default Authentication;
