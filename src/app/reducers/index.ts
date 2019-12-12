import {ActionReducerMap, MetaReducer, Action} from '@ngrx/store';
import { AppStateReducer } from './reducer';
import { AppState } from '../states/AppState';

export function AppReducer(state: AppState | undefined, action: Action) {
    return AppStateReducer(state, action);
}
