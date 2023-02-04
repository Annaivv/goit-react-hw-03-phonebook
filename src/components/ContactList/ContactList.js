import Contact from 'components/Contact/Contact';
import { ItemsList, ListItem } from './ContactList.styled';

const ContactList = ({ items, onDelete }) => {
  return (
    <div>
      <ItemsList>
        {items.map((item, idx) => (
          <ListItem key={idx}>
            <Contact contact={item} onDelete={onDelete} />
          </ListItem>
        ))}
      </ItemsList>
    </div>
  );
};

export default ContactList;
