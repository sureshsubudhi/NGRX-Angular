import { Employee } from '../models/employee.model';

export interface AppState {
    employees: Employee[];
}

export const initialState: AppState = {
    employees: []
};
