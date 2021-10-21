import PropTypes from 'prop-types';
import Contact from '../Contact/Contact';
import s from './ContactList.module.css';
function ContactList({ contacts, onDeleteContact }) {
  return (
    <ul>
      {contacts.map(({ name, number, id }) => (
        <li key={id}>
          <Contact name={name} number={number} />
          <button
            className={s.contactBtn}
            type="button"
            onClick={() => onDeleteContact(id)}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
}
ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    }),
  ),
  onDeleteContact: PropTypes.func.isRequired,
};

export default ContactList;
