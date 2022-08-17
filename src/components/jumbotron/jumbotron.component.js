import "./jumbotron.style.scss";

import React from "react";
import Button from "../button/button.component";

const Jumbotron = () => {
  const bgImgSrc =
    "https://images.unsplash.com/photo-1618142668736-fc016009a65d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80";
  return (
    <div
      className="jumbotron-container"
      style={{ backgroundImage: `url(${bgImgSrc})` }}
    >
      <h1>
        The Best Plants just for you!
        <p>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Order now and enjoy
          contact-less home delivery
        </p>
      </h1>
      <Button buttonType={"shopAll"}>SHOP ALL</Button>
    </div>
  );
};

export default Jumbotron;
