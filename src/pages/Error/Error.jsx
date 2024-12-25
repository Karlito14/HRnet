import { NavLink } from 'react-router';
import style from './Error.module.css';

export default function Error() {
  return (
    <div className={style.wrapperError}>
      <h1 className={style.error404}>404</h1>
      <p className={style.error404Content}>
        The page you are requesting does not exist.
      </p>
      <NavLink className={style.error404Link} to="/">
        Go back to home page
      </NavLink>
    </div>
  );
}
