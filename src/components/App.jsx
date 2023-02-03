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
      <h2>Contacts</h2>
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
    const { name, number } = event.target.elements;
    onSubmit(name.value, number.value);
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

export class App extends Component {
  state = {
    contacts: [],
    name: '',
    number: '',
  };

  addContact = (name, number) => {
    this.setState(prevState => ({
      contacts: [...prevState.contacts, { id: nanoid(), name, number }],
    }));
  };

  render() {
    const { contacts, name, number } = this.state;
    return (
      <Layout>
        <ContactForm onSubmit={this.addContact} />
        {contacts.length > 0 && <ContactList items={contacts} />}
        <GlobalStyle />
      </Layout>
    );
  }
}
