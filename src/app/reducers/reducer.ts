import { createReducer, on } from '@ngrx/store';
import * as employeeActions from '../actions/action';
import { initialState } from '../states/AppState';

export const AppStateReducer = createReducer(
  initialState,
  on(employeeActions.createEmployeeAction, (state, { payload }) => {
    return { ...state, employees: [...state.employees, payload] };
  })
);
