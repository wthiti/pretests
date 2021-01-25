import { createSlice } from '@reduxjs/toolkit';
import { isPrime, isFibanacci } from './numberConstant';
import { isPrimeCheck, isFibonacciCheck, convert } from './numberCheck';

export const numberSlice = createSlice({
  name: 'number',
  initialState: {
    value: 'false',
  },
  reducers: {
    check: (state, action) => {
      const { option, value } = action.payload;
      if (option === isPrime) state.value = convert(isPrimeCheck(value))
      else state.value = convert(isFibonacciCheck(value));
    },
  },
});

export const { check } = numberSlice.actions;

export const selectState = state => state.number.value;

export default numberSlice.reducer;
