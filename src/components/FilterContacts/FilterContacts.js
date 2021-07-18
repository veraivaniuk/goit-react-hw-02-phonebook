import s from "./FilterContacts.module.css";
import PropTypes from "prop-types";

const FilterContacts = ({ filter, handleFilterName }) => {
  return (
    <div>
      <h2>Find contacts by name</h2>
      <input
        className={s.filter}
        type="text"
        placeholder="Enter name"
        value={filter}
        name={filter}
        onChange={handleFilterName}
      />
    </div>
  );
};

FilterContacts.propTypes = {
  filter: PropTypes.string.isRequired,
  handleFilterName: PropTypes.func.isRequired,
};

export default FilterContacts;
