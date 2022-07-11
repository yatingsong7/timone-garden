import "./button.style.scss";

export const BUTTON_TYPE = {
  google: "google-sign-in",
  default: "default",
};

const Button = ({ children, buttonType, ...otherProps }) => {
  return (
    <button
      className={`button-container ${BUTTON_TYPE[buttonType]}`}
      {...otherProps}
    >
      {children}
    </button>
  );
};

export default Button;
