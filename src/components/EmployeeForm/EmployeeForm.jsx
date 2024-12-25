import { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import style from './EmployeeForm.module.css';
import { DEPARTMENTS, STATES } from '../../data/constants';

export const EmployeeForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    dateOfBirth: '',
    startDate: new Date(),
    street: '',
    city: '',
    state: '',
    zipCode: '',
    department: '',
  });

  const handleChange = (name, value) => {
    const newValue = value[0].toUpperCase() + value.slice(1);
    setFormData((prevState) => ({ ...prevState, [name]: newValue }));
  };

  console.log(formData)

  const handleDateChange = (name, date) => {
    setFormData((prevState) => ({ ...prevState, [name]: date }));
  };

  return (
    <form className={style.employeeForm}>
      <label htmlFor="first-name">First Name</label>
      <input
        type="text"
        id="first-name"
        value={formData.firstName}
        onChange={(e) => handleChange('firstName', e.target.value)}
      />

      <label htmlFor="last-name">Last Name</label>
      <input
        type="text"
        id="last-name"
        defaultValue={formData.lastName}
        onChange={(e) => handleChange('lastName', e.target.value)}
      />

      <label htmlFor="date-of-birth">Date of Birth</label>
      <DatePicker
        selected={formData.dateOfBirth}
        onChange={(date) => handleDateChange('dateOfBirth', date)}
        showMonthDropdown
        showYearDropdown
        dropdownMode="select"
      />

      <label htmlFor="start-date">Start Date</label>
      <DatePicker
        selected={formData.startDate}
        onChange={(date) => handleDateChange('startDate', date)}
        showMonthDropdown
        showYearDropdown
        dropdownMode="select"
      />

      <fieldset className={style.address}>
        <legend>Address</legend>
        <div className={style.address_input}>
          <label htmlFor="street">Street</label>
          <input
            type="text"
            id="street"
            defaultValue={formData.street}
            onChange={(e) => handleChange('street', e.target.value)}
          />
        </div>

        <div className={style.address_input}>
          <label htmlFor="city">City</label>
          <input
            type="text"
            id="city"
            defaultValue={formData.city}
            onChange={(e) => handleChange('city', e.target.value)}
          />
        </div>

        <div className={style.address_input}>
          <label htmlFor="state">State</label>
          <select
            id="state"
            defaultValue={formData.state}
            onChange={(e) => handleChange('state', e.target.value)}
          >
            <option value="">Select a State</option>
            {STATES.map((state, index) => (
              <option key={index} value={state.abbreviation}>
                {state.name}
              </option>
            ))}
          </select>
        </div>

        <div className={style.address_input}>
          <label htmlFor="zip-code">Zip Code</label>
          <input
            type="number"
            id="zip-code"
            defaultValue={formData.zipCode}
            onChange={(e) => handleChange('zipCode', e.target.value)}
          />
        </div>
      </fieldset>

      <label htmlFor="department">Department</label>
      <select
        id="department"
        defaultValue={formData.department}
        onChange={(e) => handleChange('department', e.target.value)}
      >
        <option value="">Select a Department</option>
        {DEPARTMENTS.map((department, index) => (
          <option key={index} value={department}>
            {department}
          </option>
        ))}
      </select>
    </form>
  );
};
