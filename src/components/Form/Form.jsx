import { useState } from 'react';
import { DEPARTMENT, INPUTS, INPUTS_ADDRESS } from '../../constants';
import { Input } from '../Input/Input';
import styles from './form.module.css';

export const Form = () => {
  const [employee, setEmployee] = useState({});

  return (
    <form id={styles.form}>
      {INPUTS.map((item) => {
        return <Input key={item.id} item={item} />;
      })}
      <fieldset className={styles.address}>
        <legend>Address</legend>
        {INPUTS_ADDRESS.map((item) => {
          return <Input key={item.id} item={item} />;
        })}
      </fieldset>
      <Input item={DEPARTMENT} />
      <button className={styles.button}>Save</button>
    </form>
  );
};
