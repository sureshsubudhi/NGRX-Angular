import { Employee } from '../models/employee.model';

export class AppState {
    employees: Employee[];
}

export const initialState: AppState = {
    employees: []
};
