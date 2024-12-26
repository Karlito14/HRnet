import { useState } from 'react';
import { useParams } from 'react-router';
import { useDispatch } from 'react-redux';
import { addEmployee, editEmployee } from '../../features/employeesSlice';
import style from './EmployeeForm.module.css';
import { DEPARTMENTS, STATES } from '@data/constants';
import { InputField } from '@components/InputField/InputField';
import { DatePickerField } from '@components/DatePickerField/DatePickerField';
import { SelectField } from '@components/SelectField/SelectField';

export const EmployeeForm = () => {
  const DEFAULT_EMPLOYEE = {
    firstName: '',
    lastName: '',
    dateOfBirth: '',
    startDate: new Date(),
    street: '',
    city: '',
    state: '',
    zipCode: '',
    department: '',
  };

  const [formData, setFormData] = useState(DEFAULT_EMPLOYEE);
  const [errors, setErrors] = useState({});
  const { id } = useParams();
  const dispatch = useDispatch();

  const handleChange = (name, value) => {
    if (value) {
      const newValue = value[0].toUpperCase() + value.slice(1);
      setFormData((prevState) => ({ ...prevState, [name]: newValue.trim() }));
    } else {
      setFormData((prevState) => ({ ...prevState, [name]: value }));
    }
  };

  const handleDateChange = (name, date) => {
    setFormData((prevState) => ({ ...prevState, [name]: date }));
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.firstName) newErrors.firstName = 'First name is required';
    if (!formData.lastName) newErrors.lastName = 'Last name is required';
    if (!formData.dateOfBirth)
      newErrors.dateOfBirth = 'Date of birth is required';
    if (!formData.startDate) newErrors.startDate = 'Start date is required';
    if (!formData.street) newErrors.street = 'Street is required';
    if (!formData.city) newErrors.city = 'City is required';
    if (!formData.state) newErrors.state = 'State is required';
    if (!formData.zipCode) newErrors.zipCode = 'Zip code is required';
    if (!formData.department) newErrors.department = 'Department is required';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = () => {
    if (validateForm()) {
      const employee = {
        ...formData,
        id: id || Date.now().toString(),
        dateOfBirth: formData.dateOfBirth.toISOString(),
        startDate: formData.startDate.toISOString(),
      };

      if (id) {
        dispatch(editEmployee({ ...employee, id }));
      } else {
        dispatch(addEmployee(employee));
      }
    }
  };

  return (
    <form className={style.employeeForm}>
      <InputField
        label={'First Name'}
        id={'first-name'}
        value={formData.firstName}
        onChange={(value) => handleChange('firstName', value)}
        error={errors.firstName}
      />

      <InputField
        label={'Last Name'}
        id={'last-name'}
        value={formData.lastName}
        onChange={(value) => handleChange('lastName', value)}
        error={errors.lastName}
      />

      <DatePickerField
        label="Date of Birth"
        selected={formData.dateOfBirth}
        onChange={(date) => handleDateChange('dateOfBirth', date)}
        error={errors.dateOfBirth}
      />

      <DatePickerField
        label="Start Date"
        selected={formData.startDate}
        onChange={(date) => handleDateChange('startDate', date)}
        error={errors.startDate}
      />

      <fieldset className={style.address}>
        <legend>Address</legend>
        <InputField
          label={'Street'}
          id={'street'}
          value={formData.street}
          onChange={(value) => handleChange('street', value)}
          error={errors.street}
        />

        <InputField
          label={'City'}
          id={'city'}
          value={formData.city}
          onChange={(value) => handleChange('city', value)}
          error={errors.city}
        />

        <SelectField
          label="State"
          id="state"
          value={formData.state}
          options={STATES}
          onChange={(value) => handleChange('state', value)}
          error={errors.state}
        />

        <InputField
          label={'Zip Code'}
          id={'zip-code'}
          value={formData.zipCode}
          onChange={(value) => handleChange('zipCode', value)}
          error={errors.zipCode}
          type="number"
        />
      </fieldset>

      <SelectField
        label="Department"
        id="department"
        value={formData.department}
        options={DEPARTMENTS}
        onChange={(value) => handleChange('department', value)}
        error={errors.department}
      />

      <button
        className={style.button}
        type="button"
        onClick={() => handleSubmit()}
      >
        {id ? 'Update Employee' : 'Add Employee'}
      </button>
    </form>
  );
};
