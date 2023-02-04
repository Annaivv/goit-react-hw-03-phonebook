import '../index.css';
import { Component } from 'react';
import { nanoid } from 'nanoid';
import { Layout } from './Layout';
import { GlobalStyle } from './GlobalStyle';
import {
  Form,
  Field,
  Input,
  Button,
} from './Phonebook/ContactForm/ContactForm.styled';

const ContactList = ({ items }) => {
  return (
    <div>
      <ul>
        {items.map((item, idx) => (
          <li key={idx}>
            <Contact contact={item} />
          </li>
        ))}
      </ul>
    </div>
  );
};

const Contact = ({ contact: { name, number } }) => {
  return (
    <div>
      <span>{name}</span>
      <span>: </span>
      <span>{number}</span>
    </div>
  );
};

const ContactForm = ({ onSubmit }) => {
  const handleSubmit = event => {
    event.preventDefault();
    const form = event.currentTarget;
    const { name, number } = event.target.elements;
    onSubmit(name.value, number.value);
    form.reset();
  };
  return (
    <Form onSubmit={handleSubmit}>
      <h2>Phonebook</h2>
      <Field>
        Name
        <Input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        ></Input>
        <Field>
          Number
          <Input
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          ></Input>
        </Field>
      </Field>

      <Button type="submit">Add contact</Button>
    </Form>
  );
};

const Filter = ({ value, onChange }) => {
  return (
    <>
      <label htmlFor="">Find contacts by name</label>
      <input type="text" value={value} onChange={onChange} />
    </>
  );
};

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
    name: '',
    number: '',
  };

  addContact = (name, number) => {
    this.setState(prevState => ({
      contacts: [...prevState.contacts, { id: nanoid(), name, number }],
    }));
  };

  changeFilter = event => {
    this.setState({ filter: event.currentTarget.value });
  };

  getVisibleContacts = () => {
    const { contacts, filter } = this.state;
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  render() {
    const { contacts, filter } = this.state;
    const filteredContacts = this.getVisibleContacts();

    return (
      <Layout>
        <ContactForm onSubmit={this.addContact} />
        <h2>Contacts</h2>
        <Filter value={filter} onChange={this.changeFilter} />
        {contacts.length > 0 && <ContactList items={filteredContacts} />}
        <GlobalStyle />
      </Layout>
    );
  }
}
