import Contact from 'components/Contact/Contact';

const ContactList = ({ items, onDelete }) => {
  return (
    <div>
      <ul>
        {items.map((item, idx) => (
          <li key={idx}>
            <Contact contact={item} onDelete={onDelete} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ContactList;
