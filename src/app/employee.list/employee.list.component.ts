import { Component, OnInit } from '@angular/core';
import { AppState } from '../states/AppState';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Employee } from '../models/employee.model';
import {map} from 'rxjs/operators';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee.list.component.html',
  styleUrls: ['./employee.list.component.scss']
})
export class EmployeeListComponent implements OnInit {
  employees$: Employee[];

  constructor(private store: Store<AppState>) {
  }

  ngOnInit() {
    let app$= this.store.pipe(select('employees'));
     app$
      .pipe(
        map(x => {this.employees$=x})
      ).subscribe();
  }

}
