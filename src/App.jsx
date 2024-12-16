import { Outlet } from 'react-router';
import styles from './app.module.css';

function App() {
  return (
    <div className={styles.container}>
      <Outlet />
    </div>
  );
}

export default App;
