import "./form-input.style.scss";

const FormInput = ({ label, ...otherProps }) => {
  return (
    <div className="form-input-group">
      <label className="form-label">{label}</label>
      <input className="form-input" {...otherProps} />
    </div>
  );
};

export default FormInput;
