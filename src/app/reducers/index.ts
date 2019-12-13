import {ActionReducerMap, MetaReducer, Action} from '@ngrx/store';
import { AppStateReducer } from './reducer';
import { AppState } from '../states/AppState';
import { environment } from 'src/environments/environment';
import { storeFreeze } from 'ngrx-store-freeze';

export function AppReducer(state: AppState | undefined, action: Action) {
    return AppStateReducer(state, action);
}

export const metaReducers: MetaReducer<AppState>[] =
  !environment.production ? [storeFreeze] : [];
