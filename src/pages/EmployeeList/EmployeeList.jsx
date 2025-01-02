import { NavLink } from 'react-router';
import styles from './employeeList.module.css';
import { EmployeeListComponent } from '@components/EmployeeListComponent/EmployeeListComponent';

export const EmployeeList = () => {
  return (
    <>
      <h1>Current Employees</h1>
      <div className={styles.container}>
        <EmployeeListComponent />
      </div>
      <NavLink to="/">Home</NavLink>
    </>
  );
};
