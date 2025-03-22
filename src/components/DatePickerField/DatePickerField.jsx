import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import style from './DatePickerField.module.css';

export const DatePickerField = ({ label, id, selected, onChange, error }) => (
  <div className={style.field}>
    <label htmlFor={id}>{label}</label>
    <DatePicker
      selected={selected}
      id={id}
      onChange={onChange}
      showMonthDropdown
      showYearDropdown
      dropdownMode="select"
    />
    {error && <span className={style.error}>{error}</span>}
  </div>
);
