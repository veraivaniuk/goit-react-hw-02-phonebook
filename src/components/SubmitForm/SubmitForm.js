import Button from "../Button/Button";
import s from "./SubmitForm.module.css";
//import PropTypes from 'prop-types';
import { Component } from "react";

class SubmitForm extends Component {
  state = {
    name: "",
    number: "",
  };

  handleChangeName = (e) => {
    this.setState({ name: e.target.value });
    //console.log(e.target.value);
  };
  handleChangeNumber = (e) => {
    this.setState({ number: e.target.value });
    //console.log(e.target.value);
  };

  /*
   * Вызывается при отправке формы
   */
  handleSubmit = (evt) => {
    evt.preventDefault();
    console.log(`Signed up as: ${this.state.name}`);

    // Проп который передается форме для вызова при сабмите
    this.props.onSubmit({ ...this.state });
    this.reset();
  };

  reset() {
    this.setState({
      name: "",
      number: "",
    });
  }

  render() {
    const { name, number } = this.state;

    return (
      <form onSubmit={this.handleSubmit}>
        <label className={s.label}>
          Name
          <input
            type="text"
            name={name}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
            required
            placeholder="Enter name"
            value={name}
            onChange={this.handleChangeName}
          />
        </label>
        <label className={s.label}>
          Number
          <input
            type="tel"
            name={number}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
            required
            placeholder="Enter number"
            value={number}
            onChange={this.handleChangeNumber}
          />
        </label>
        <Button buttonName="Add contact" />
      </form>
    );
  }
}

export default SubmitForm;
