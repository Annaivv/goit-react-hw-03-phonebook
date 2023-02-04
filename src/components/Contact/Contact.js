import { ContactBlock, DeleteButton } from './Contact.styled';

const Contact = ({ contact: { id, name, number }, onDelete }) => {
  return (
    <ContactBlock>
      <p>
        <span>{name}</span>
        <span>: </span>
        <span>{number}</span>
      </p>

      <DeleteButton onClick={() => onDelete(id)}>Delete</DeleteButton>
    </ContactBlock>
  );
};

export default Contact;
