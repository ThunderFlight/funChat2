import { createReducer, on } from '@ngrx/store';
import { increment, decrement, reset } from './user.action';

export const initialState = 0;

export const userReducer = createReducer(
  initialState,
  on(increment, (state) => state + 1),
  on(decrement, (state) => state - 1),
  on(reset, () => 0),
);
