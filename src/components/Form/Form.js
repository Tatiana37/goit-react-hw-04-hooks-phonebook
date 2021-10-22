import { useState } from 'react';
import PropTypes from 'prop-types';
import s from './Form.module.css';
import shortid from 'shortid';

function Form({onSubmit}) {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const nameId = shortid.generate();
  const telId = shortid.generate();

  const handleChange = e => {
    const { name, value } = e.currentTarget;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
        return;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    const contact = {
      id: shortid.generate(),
      name,
      number,
    };
    onSubmit(contact);
    reset();
  };

  const reset = () => {
    setName('');
    setNumber('');
  }

    return (
      <div className={s.border}>
        <form className={s.form} onSubmit={handleSubmit}>
          <label className={s.label} htmlFor={name}>
            Name
          </label>
          <input
            className={s.input}
            value={name}
            id={nameId}
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
            onChange={handleChange}
            required
          />
          <label className={s.label} htmlFor={number}>
            Number
          </label>
          <input
            className={s.input}
            value={number}
            id={telId}
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
            onChange={handleChange}
            required
          />
          <button className={s.button} type="submit">
            Add contact
          </button>
        </form>
      </div>
    );
  }


Form.propTypes = {
  name: PropTypes.string,
  number: PropTypes.number,
  onSubmit: PropTypes.func.isRequired,
};

export default Form;
