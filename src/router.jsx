import { createBrowserRouter } from 'react-router';
import App from './App';
import { CreateEmployee } from '@pages/CreateEmployee/CreateEmployee';
import { EmployeeList } from '@pages/EmployeeList/EmployeeList';
import Error from '@pages/Error/Error';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        element: <CreateEmployee />,
      },
      {
        path: 'employee-list',
        element: <EmployeeList />,
      },
      {
        path: '*',
        element: <Error />,
      },
    ],
  },
]);
