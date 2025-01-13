import { Outlet } from 'react-router';
import './style.css'

function App() {
  return (
    <div className='container'>
      <Outlet />
    </div>
  );
}

export default App;
