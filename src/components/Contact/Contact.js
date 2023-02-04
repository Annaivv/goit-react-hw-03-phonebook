const Contact = ({ contact: { id, name, number }, onDelete }) => {
  return (
    <div>
      <span>{name}</span>
      <span>: </span>
      <span>{number}</span>
      <button onClick={() => onDelete(id)}>Delete</button>
    </div>
  );
};

export default Contact;
