import { NavLink } from 'react-router';
import { EmployeeListComponent } from '@components/EmployeeListComponent/EmployeeListComponent';

export const EmployeeList = () => {
  return (
    <>
      <h1>Current Employees</h1>
      <div>
        <EmployeeListComponent />
      </div>
      <NavLink to="/" className='button'>Home</NavLink>
    </>
  );
};
