import styles from './input.module.css';

export const Input = ({ item }) => {
  return (
    <>
      {item.type === 'select' ? (
        <>
          <label className={styles.label} htmlFor={item.id}>
            {item.label}
          </label>
          <select className={styles.select} name={item.id} id={item.id}>
            {item.options.map((option) => {
              return (
                <option key={option} value={option.abbreviation || option.name}>
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
          <input id={item.id} type={item.type} />
        </>
      )}
    </>
  );
};
