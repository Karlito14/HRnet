import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import style from './DatePickerField.module.css';

export const DatePickerField = ({ label, selected, onChange, error }) => (
  <div className={style.field}>
    <label>{label}</label>
    <DatePicker
      selected={selected}
      onChange={onChange}
      showMonthDropdown
      showYearDropdown
      dropdownMode="select"
    />
    {error && <span className={style.error}>{error}</span>}
  </div>
);
