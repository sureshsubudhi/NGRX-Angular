import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppReducer } from './reducers';
import { EmployeeComponent } from './employee/employee.component';
import { EmployeeListComponent } from './employee.list/employee.list.component';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeComponent,
    EmployeeListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({ employees : AppReducer })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
