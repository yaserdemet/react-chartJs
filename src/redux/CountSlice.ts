import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { _notifications } from 'src/_mock/arrays';

interface CounterState {
  value: number;
}

const initialState: CounterState = {
  value: _notifications.filter((item: any) => item.isUnRead === true).length,
};

const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    onClickBadge : (state)  =>  {
        state.value = 0;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.value += action.payload;
    },
  },
});

export const { increment, decrement, incrementByAmount, onClickBadge } = counterSlice.actions;
export default counterSlice.reducer;
