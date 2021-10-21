import PropTypes from 'prop-types';
import s from './FilterSearch.module.css';

function FilterSearch({ filter, onChange }) {
  return (
    <div className={s.filter}>
      <label className={s.label}>Find contacts by name</label>
      <input
        className={s.input}
        type="text"
        name="name"
        value={filter}
        onChange={onChange}
      />
    </div>
  );
}

FilterSearch.propTypes = {
  filter: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default FilterSearch;
