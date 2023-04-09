import { useDispatch } from 'react-redux';
import { addContact } from 'redux/phoneBookSlice';
import './ContactForm.module.css';

export const ContactForm = () => {
  const dispatch = useDispatch();
  // const [name, setName] = useState('');
  // const [number, setNumber] = useState('');

  // const getValue = ({ target: { name, value } }) => {
  //   switch (name) {
  //     case 'name':
  //       setName(value);
  //       break;
  //     case 'number':
  //       setNumber(value);
  //       break;
  //     default:
  //       return;
  //   }
  // };

  const onSubmit = evt => {
    evt.preventDefault();
    const form = evt.target;
    const name = form.elements.name.value;
    const number = form.elements.number.value;
    dispatch(addContact({ name, number }));
    form.reset();
  };

  // const resetStateValues = () => {
  //   setName('');
  //   setNumber('');
  // };

  return (
    <form onSubmit={onSubmit}>
      <label>
        <p>Name</p>
        <input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          // onChange={getValue}
          // value={name}
        />
      </label>
      <label>
        <p>Number</p>
        <input
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          // onChange={getValue}
          // value={number}
        />
      </label>
      <button type="submit">Add to contact</button>
    </form>
  );
};
