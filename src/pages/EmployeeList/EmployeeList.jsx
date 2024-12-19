import { useState } from 'react';
import styles from './employeeList.module.css';

export const EmployeeList = () => {
  const [entries, setEntries] = useState('10');
  const [search, setSearch] = useState('');

  return (
    <>
      <h1>Current Employees</h1>
      <div className={styles.container_header}>
        <div>
          <label htmlFor="entries">
            Show
            <select
              className={styles.select}
              name="entries"
              id="entries"
              defaultValue={entries}
              onChange={(event) => setEntries(event.target.value)}
            >
              <option value="10">10</option>
              <option value="25">25</option>
              <option value="50">50</option>
              <option value="100">100</option>
            </select>
            entries
          </label>
        </div>
        <div>
          <label htmlFor="search">Search: </label>
          <input
            id="search"
            type="text"
            defaultValue={search}
            onChange={(event) => setSearch(event.target.value)}
          />
        </div>
      </div>
    </>
  );
};
