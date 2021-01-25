import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
    check,
    selectState,
} from './numberSlice';
import styles from './Number.module.css';

import { isPrime, isFibanacci } from './numberConstant.js';

export function Number() {
  const state = useSelector(selectState);
  const dispatch = useDispatch();
  const [testNumber, setTestNumber] = useState('0');
  const [option, setOption] = useState(isPrime);

  function handleNumber(e) {
      setTestNumber(e.target.value);
      dispatch(check({
          option,
          value: parseInt(e.target.value)
      }))
  }

  function handleOption(e) {
      setOption(e.target.value);
      dispatch(check({
          option: e.target.value,
          value: parseInt(testNumber)
      }))
  }

  return (
      <div className={styles.row}>
        <input
          className={styles.textbox}
          aria-label="Set test number"
          value={testNumber}
          onChange={handleNumber}
        />

        <select value={option} onChange={handleOption}>
            <option value={isPrime}>{isPrime}</option>
            <option value={isFibanacci}>{isFibanacci}</option>
        </select>

        <text>{state}</text>
      </div>
  );
}
