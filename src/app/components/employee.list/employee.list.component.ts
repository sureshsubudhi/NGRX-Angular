import { Component, OnInit } from '@angular/core';
import { AppState } from '../../states/AppState';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Employee } from '../../models/employee.model';
import {map} from 'rxjs/operators';
import { getEmployees } from 'src/app/selectors/selector';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee.list.component.html',
  styleUrls: ['./employee.list.component.scss']
})
export class EmployeeListComponent implements OnInit {
  employees$: Observable<Employee[]>;

  constructor(private store: Store<AppState>) {
  }

  ngOnInit() {
    this.employees$ = this.store.select('appState');
  }
}
