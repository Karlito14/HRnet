import { NavLink } from 'react-router';

export const CreateEmployee = () => {
  return (
    <>
      <h1>HRnet</h1>
      <NavLink to="/employee-list">View Current Employees</NavLink>
      <h2>Create Employee</h2>
    </>
  );
};
