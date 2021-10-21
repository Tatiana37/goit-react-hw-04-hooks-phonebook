import { Component } from 'react';
import PropTypes from 'prop-types';
import s from './Form.module.css';
import shortid from 'shortid';

class Form extends Component {
  state = {
    name: '',
    number: '',
  };

  nameId = shortid.generate();
  telId = shortid.generate();

  handleChange = e => {
    const { name, value } = e.currentTarget;
    this.setState({
      [name]: value,
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { name, number } = this.state;
    const contact = {
      id: shortid.generate(),
      name,
      number,
    };
    this.props.onSubmit(contact);
    this.reset();
  };

  reset() {
    this.setState({ name: '', number: '' });
  }

  render() {
    const { name, number } = this.state;
    const { handleSubmit, handleChange, nameId, telId } = this;
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
}

Form.propTypes = {
  name: PropTypes.string,
  number: PropTypes.number,
  onSubmit: PropTypes.func.isRequired,
};

export default Form;
