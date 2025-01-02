import styles from './SortableHeader.module.css';

export const SortableHeader = ({ column, label, sortConfig, requestSort }) => {
  const isSorted = sortConfig.key === column;

  return (
    <th onClick={() => requestSort(column)} className={styles.sortable}>
      <div className="sortableHeaderContent">
        <span>{label}</span>
        <span className="sortableHeaderIndicator">
          {isSorted && sortConfig.direction === 'ascending' ? '▲' : '▼'}
        </span>
      </div>
    </th>
  );
};
