const Contact = ({ contact: { name, number } }) => {
  return (
    <div>
      <span>{name}</span>
      <span>: </span>
      <span>{number}</span>
    </div>
  );
};

export default Contact;
