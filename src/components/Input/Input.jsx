import { useState } from 'react';
import styles from './input.module.css';

export const Input = ({ item }) => {
  const [valueInput, setValueInput] = useState(null);

  return (
    <>
      {item.type === 'select' ? (
        <>
          <label className={styles.label} htmlFor={item.id}>
            {item.label}
          </label>
          <select
            className={styles.select}
            name={item.id}
            id={item.id}
            onChange={(event) => setValueInput(event.target.value)}
          >
            {item.options.map((option) => {
              return (
                <option
                  key={option.name}
                  value={option.abbreviation || option.name}
                >
                  {option.name}
                </option>
              );
            })}
          </select>
        </>
      ) : (
        <>
          <label className={styles.label} htmlFor={item.id}>
            {item.label}
          </label>
          <input
            id={item.id}
            type={item.type}
            onChange={(event) => setValueInput(event.target.value)}
          />
        </>
      )}
    </>
  );
};
