import { NavLink } from 'react-router';
import { Form } from '../components/Form/Form';

export const CreateEmployee = () => {
  return (
    <>
      <h1>HRnet</h1>
      <NavLink to="/employee-list">View Current Employees</NavLink>
      <h2>Create Employee</h2>
      <Form />
    </>
  );
};
