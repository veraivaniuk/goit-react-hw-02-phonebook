import s from "./Button.module.css";
import PropTypes from "prop-types";
function Button({ buttonName, onDelete }) {
  return (
    <button className={s.button} type="submit" onClick={onDelete}>
      {buttonName}
    </button>
  );
}

Button.propTypes = {
  buttonName: PropTypes.string.isRequired,
  onDelete: PropTypes.func,
};

export default Button;
