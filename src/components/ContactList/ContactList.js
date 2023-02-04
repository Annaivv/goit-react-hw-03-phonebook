import Contact from 'components/Contact/Contact';

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

export default ContactList;
