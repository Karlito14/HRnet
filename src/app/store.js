import { configureStore } from '@reduxjs/toolkit';
import employeeReducer from '../features/employeesSlice';

export const store = configureStore({
  reducer: {
    employees: employeeReducer,
  },
});
