import { configureStore } from '@reduxjs/toolkit';
import employeeReducer from '../features/employeesSlice';

const saveState = (state) => {
  try {
    const serialisedState = JSON.stringify(state);
    localStorage.setItem('reduxState', serialisedState);
  } catch (e) {
    console.error(e);
  }
};

const loadState = () => {
  try {
    const serializedState = localStorage.getItem('reduxState');
    if (serializedState === null) return undefined;

    return JSON.parse(serializedState);
  } catch (err) {
    console.error('Error loading state:', err);
    return undefined;
  }
};

const preloadedState = loadState();

export const store = configureStore({
  reducer: {
    employees: employeeReducer,
  },
  preloadedState,
});

store.subscribe(() => {
  saveState(store.getState());
});
