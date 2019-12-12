import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Employee.ListComponent } from './employee.list.component';

describe('Employee.ListComponent', () => {
  let component: Employee.ListComponent;
  let fixture: ComponentFixture<Employee.ListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Employee.ListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Employee.ListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
