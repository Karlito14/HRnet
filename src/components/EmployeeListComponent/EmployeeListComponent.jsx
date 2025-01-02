import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import { deleteEmployee } from '@redux/employeesSlice';
import styles from './EmployeeListComponent.module.css';
import { SortableHeader } from '../SortableHeader/SortableHeader';
import { FaPenToSquare } from 'react-icons/fa6';
import { FaTimes } from 'react-icons/fa';

export const EmployeeListComponent = () => {
  const employees = useSelector((state) => state.employees.employees);
  console.log(employees);

  const [search, setSearch] = useState('');
  const [entries, setEntries] = useState(10);
  const [filteredData, setFilteredData] = useState([]);
  const [sortConfig, setSortConfig] = useState({
    key: null,
    direction: 'ascending',
  });
  const [currentPage, setCurrentPage] = useState(1);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    let result = employees.filter(
      (item) =>
        item.firstName.toLowerCase().includes(search.toLowerCase()) ||
        item.lastName.toLowerCase().includes(search.toLowerCase()) ||
        item.department.toLowerCase().includes(search.toLowerCase()) ||
        item.city.toLowerCase().includes(search.toLowerCase()) ||
        item.state.toLowerCase().includes(search.toLowerCase())
    );
    result = sortData(result, sortConfig);
    setFilteredData(result);
  }, [search, employees, sortConfig]);

  useEffect(() => {
    setCurrentPage(1);
  }, [entries, search]);

  const handleSearchChange = (e) => {
    setSearch(e.target.value);
  };

  const handleEntriesChange = (e) => {
    setEntries(parseInt(e.target.value));
  };

  const sortData = (data, sortConfig) => {
    if (!sortConfig.key) return data;

    return [...data].sort((a, b) => {
      if (a[sortConfig.key] < b[sortConfig.key]) {
        return sortConfig.direction === 'ascending' ? -1 : 1;
      }
      if (a[sortConfig.key] > b[sortConfig.key]) {
        return sortConfig.direction === 'ascending' ? 1 : -1;
      }
      return 0;
    });
  };

  const requestSort = (key) => {
    let direction = 'ascending';
    if (sortConfig.key === key) {
      if (sortConfig.direction === 'ascending') {
        direction = 'descending';
      } else {
        direction = 'ascending';
      }
    }
    setSortConfig({ key, direction });
  };

  const handleDelete = (employeeId) => {
    if (window.confirm('Are you sure you want to delete this employee?')) {
      dispatch(deleteEmployee(employeeId));
    }
  };

  const handleEdit = (employeeId) => {
    navigate(`/edit/${employeeId}`);
  };

  const indexOfLastItem = currentPage * entries;
  const indexOfFirstItem = indexOfLastItem - entries;
  const currentItems = filteredData.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(filteredData.length / entries);

  const handlePrevious = () => {
    setCurrentPage((prev) => Math.max(prev - 1, 1));
  };

  const handleNext = () => {
    setCurrentPage((prev) => Math.min(prev + 1, totalPages));
  };

  const formatDate = (dateString) => {
    if (!dateString) return 'N/A';
    const date = new Date(dateString);
    return date instanceof Date && !isNaN(date)
      ? date.toLocaleDateString()
      : 'Invalid Date';
  };

  return (
    <>
      <div className={styles.container_header}>
        <div>
          <label htmlFor="entries">
            Show
            <select
              id="entries"
              className={styles.select_entries}
              value={entries}
              onChange={handleEntriesChange}
            >
              <option value={10}>10</option>
              <option value={25}>25</option>
              <option value={50}>50</option>
              <option value={100}>100</option>
            </select>{' '}
            entries
          </label>
        </div>
        <div>
          <label htmlFor="search" className={styles.label_search}>
            Search:
          </label>
          <input
            id="search"
            type="text"
            value={search}
            onChange={handleSearchChange}
          />
        </div>
      </div>

      <div className="table-container">
        <table className="employeeTable">
          <thead>
            <tr>
              <SortableHeader
                column="firstName"
                label="First Name"
                sortConfig={sortConfig}
                requestSort={requestSort}
              />
              <SortableHeader
                column="lastName"
                label="Last Name"
                sortConfig={sortConfig}
                requestSort={requestSort}
              />
              <SortableHeader
                column="startDate"
                label="Start Date"
                sortConfig={sortConfig}
                requestSort={requestSort}
              />
              <SortableHeader
                column="department"
                label="Department"
                sortConfig={sortConfig}
                requestSort={requestSort}
              />
              <SortableHeader
                column="dateOfBirth"
                label="Date of Birth"
                sortConfig={sortConfig}
                requestSort={requestSort}
              />
              <SortableHeader
                column="street"
                label="Street"
                sortConfig={sortConfig}
                requestSort={requestSort}
              />
              <SortableHeader
                column="city"
                label="City"
                sortConfig={sortConfig}
                requestSort={requestSort}
              />
              <SortableHeader
                column="state"
                label="State"
                sortConfig={sortConfig}
                requestSort={requestSort}
              />
              <SortableHeader
                column="zipCode"
                label="Zip Code"
                sortConfig={sortConfig}
                requestSort={requestSort}
              />
              <th>Edit</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {currentItems.length > 0 ? (
              currentItems.map((item) => (
                <tr key={item.id}>
                  <td>{item.firstName}</td>
                  <td>{item.lastName}</td>
                  <td>{formatDate(item.startDate)}</td>
                  <td>{item.department}</td>
                  <td>{formatDate(item.dateOfBirth)}</td>
                  <td>{item.street}</td>
                  <td>{item.city}</td>
                  <td>{item.state}</td>
                  <td>{item.zipCode}</td>
                  <td>
                    <button
                      onClick={() => handleEdit(item.id)}
                      className="edit-button"
                      aria-label={`Edit ${item.firstName} ${item.lastName}`}
                    >
                      <FaPenToSquare className="icon" />
                    </button>
                  </td>
                  <td>
                    <button
                      onClick={() => handleDelete(item.id)}
                      className="delete-button"
                      aria-label={`Delete ${item.firstName} ${item.lastName}`}
                    >
                      <FaTimes className="icon" />
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="11" className="employeeTable-no-data">
                  No data available in table
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      <div className="employeeTable-footer">
        <div className="employeeTable-info">
          Showing {indexOfFirstItem + 1} to{' '}
          {Math.min(indexOfLastItem, filteredData.length)} of{' '}
          {filteredData.length} entries
        </div>
        <div className="employeeTable-pagination">
          <button onClick={handlePrevious} disabled={currentPage === 1}>
            Previous
          </button>
          <button onClick={handleNext} disabled={currentPage === totalPages}>
            Next
          </button>
        </div>
      </div>
    </>
  );
};
