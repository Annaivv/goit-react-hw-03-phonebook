// import { nanoid } from 'nanoid';
// import React, { Component } from 'react';

// export class PhonebookForm extends Component {
//   nameInputId = nanoid();

//   state = {
//     name: '',
//   };

//   handleInputChange = event => {
//     const { name, value } = event.currentTarget;
//     this.setState({ [name]: value });
//   };

//   handleSubmit = event => {
//     event.preventDefault();
//     this.props.onSubmit(this.state);
//   };

//   render() {
//     return (
//       <>
//         <h2>Phonebook</h2>
//         <form onSubmit={this.handleSubmit}>
//           <label htmlFor={this.nameInputId}>
//             Name
//             <input
//               type="text"
//               name="name"
//               value={this.state.name}
//               onChange={this.handleInputChange}
//               pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
//               title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
//               required
//             />
//           </label>

//           <button type="submit">Add contact</button>
//         </form>
//       </>
//     );
//   }
// }
