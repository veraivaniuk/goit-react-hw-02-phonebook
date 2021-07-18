import s from "./List.module.css";
import PropTypes from "prop-types";
import Button from "../Button";

function List({ contacts, onDelete }) {
  return (
    <ul>
      {contacts.map((el) => {
        return (
          <li className={s.list} key={el.id}>
            {el.name}: {el.number}
            <Button
              buttonName="Delete"
              onDelete={() => onDelete(el.id)}
            ></Button>
          </li>
        );
      })}
    </ul>
  );
}

List.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ).isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default List;
