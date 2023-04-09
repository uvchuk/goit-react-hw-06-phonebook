import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { removeContact } from 'redux/phoneBookSlice';

export const Contact = () => {
  const contacts = useSelector(state => state.phoneBook.contacts);
  const dispatch = useDispatch();

  return contacts.map(({ id, name, number }) => (
    <li key={id}>
      <span>
        {name}: {number}
      </span>
      <button
        onClick={() => {
          dispatch(removeContact(id));
        }}
        type="button"
      >
        Delete
      </button>
    </li>
  ));
};
