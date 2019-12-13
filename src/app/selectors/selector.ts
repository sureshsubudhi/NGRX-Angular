import { createSelector, createFeatureSelector } from '@ngrx/store';
import { AppState } from '../states/AppState';


export const getAppState = createFeatureSelector<{appState : AppState}>('appSate');
export const getEmployees = createSelector(
  getAppState,
  (state) => state.appState.employees
);
