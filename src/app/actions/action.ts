import {createAction, props} from '@ngrx/store';
import { Employee } from '../models/employee.model';


export const createEmployeeAction = createAction(
    '[Employee] - create Employee',
    props<{payload: Employee}>()
    );
