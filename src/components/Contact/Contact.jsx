import { useSelector, useDispatch } from 'react-redux';
import { removeContact, useContacts, useFiltered } from 'redux/phoneBookSlice';

export const Contact = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(useContacts);
  const filtered = useSelector(useFiltered);
  const contactsToShow = filtered ? filtered : contacts;

  return contactsToShow.map(({ id, name, number }) => (
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
