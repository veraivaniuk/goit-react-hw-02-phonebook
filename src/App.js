import "./App.css";
import { Component } from "react";
import Container from "./components/Container/Container";
import Section from "./components/Section/Section";
import SubmitForm from "./components/SubmitForm/SubmitForm";
import { v4 as uuidv4 } from "uuid";
import List from "./components/List/List";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import FilterContacts from "./components/FilterContacts/FilterContacts";

export default class App extends Component {
  state = {
    contacts: [
      { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
      { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
      { id: "id-3", name: "Eden Clements", number: "645-17-79" },
      { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
    ],
    filter: "",
  };

  onSubmitHandler = (data) => {
    console.log(this.state.contacts);
    if (this.state.contacts.find((el) => el.name.includes(data.name))) {
      const notify = () => toast.warn(`${data.name} is already in contacts!`);
      return notify();
    }

    this.setState((state) => ({
      contacts: [
        { name: data.name, id: uuidv4(), number: data.number },
        ...this.state.contacts,
      ],
    }));
    //this.setState({ name: data.name })
  };

  handleFilterName = (e) => {
    this.setState({ filter: e.currentTarget.value });
  };

  getVisibleContacts = () => {
    const { filter, contacts } = this.state;
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };
  // onDelete = (e) => {
  // console.log(e);
  // }

  onDelete = (id) => {
    console.log(id);
    this.setState((prevState) => ({
      contacts: prevState.contacts.filter((el) => el.id !== id),
    }));
  };

  render() {
    const { filter } = this.state;
    const visibleContacts = this.getVisibleContacts();
    return (
      <Container>
        <Section title="Phonebook">
          <SubmitForm onSubmit={this.onSubmitHandler} />
        </Section>
        <Section title="Contacts">
          <FilterContacts
            filter={filter}
            handleFilterName={this.handleFilterName}
          />
          <List contacts={visibleContacts} onDelete={this.onDelete} />
        </Section>
        <ToastContainer />
      </Container>
    );
  }
}
