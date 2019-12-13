import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppReducer, metaReducers } from './reducers';
import { EmployeeComponent } from './components/employee/employee.component';
import { EmployeeListComponent } from './components/employee.list/employee.list.component';
import { AppStateReducer } from './reducers/reducer';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeComponent,
    EmployeeListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({appState : AppStateReducer})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
