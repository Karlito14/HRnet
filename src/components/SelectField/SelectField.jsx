import style from './SelectField.module.css';

export const SelectField = ({ label, id, value, options, onChange, error }) => (
  <div className={style.field}>
    <label htmlFor={id}>{label}</label>
    <select id={id} value={value} onChange={(e) => onChange(e.target.value)}>
      <option value="">Select an option</option>
      {options.map((option, index) => (
        <option key={index} value={option.abbreviation || option.name}>
          {option.name}
        </option>
      ))}
    </select>
    {error && (
      <span id={`${id}-error`} className={style.error}>
        {error}
      </span>
    )}
  </div>
);
