import { NavLink } from 'react-router';
import { EmployeeForm } from '@components/EmployeeForm/EmployeeForm';

export const CreateEmployee = () => {
  return (
    <>
      <h1>HRnet</h1>
      <NavLink to="/employee-list" className='button'>View Current Employees</NavLink>
      <h2>Create Employee</h2>
      <EmployeeForm />
    </>
  );
};
