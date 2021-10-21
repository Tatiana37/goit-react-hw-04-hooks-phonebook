import PropTypes from 'prop-types';
import s from './Contact.module.css';

function Contact({ name, number }) {
  return (
    <>
      <span className={s.span}>{name}:</span>
      <span className={s.span}>{number}</span>
    </>
  );
}
Contact.propType = {
  name: PropTypes.string.isRequired,
  number: PropTypes.number.isRequired,
};

export default Contact;
