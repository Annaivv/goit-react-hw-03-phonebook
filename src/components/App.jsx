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
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

const ContactForm = ({ onSubmit }) => {
  const handleSubmit = event => {
    event.preventDefault();
    onSubmit(event.target.elements.name.value);
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
      </Field>

      <Button type="submit">Add contact</Button>
    </Form>
  );
};

export class App extends Component {
  state = {
    contacts: [],
    name: '',
  };

  addContact = text => {
    console.log(text);
    this.setState(prevState => ({
      contacts: [...prevState.contacts, text],
      name: text,
      id: nanoid(),
    }));
  };

  render() {
    const { contacts, name } = this.state;
    return (
      <Layout>
        <ContactForm onSubmit={this.addContact} />
        {contacts.length > 0 && <ContactList items={contacts} />}
        <GlobalStyle />
      </Layout>
    );
  }
}
