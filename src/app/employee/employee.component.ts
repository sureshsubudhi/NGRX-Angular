import { Component, OnInit } from '@angular/core';
import { AppState } from '../states/AppState';
import { Store } from '@ngrx/store';
import { createEmployeeAction } from '../actions/action';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss']
})
export class EmployeeComponent implements OnInit {

  constructor(private store: Store<AppState>) { }

  ngOnInit() {
  }

  Save(ctrl) {
    this.store.dispatch(createEmployeeAction({payload: {id: 0, name: ctrl.value}}));
  }
}
