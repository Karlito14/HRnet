import { NavLink } from 'react-router';
import styles from './Error.module.css';

export default function Error() {
  return (
    <div className={styles.wrapperError}>
      <h1 className={styles.error404}>404</h1>
      <p className={styles.error404Content}>
        The page you are requesting does not exist.
      </p>
      <NavLink className={styles.error404Link} to="/">
        Go back to home page
      </NavLink>
    </div>
  );
}
