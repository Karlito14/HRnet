import { Outlet } from 'react-router';
import style from './style.module.css'

function App() {
  return (
    <div className={style.container}>
      <Outlet />
    </div>
  );
}

export default App;
