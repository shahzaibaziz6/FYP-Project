import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminSearchStudentComponent } from './admin-search-student.component';

describe('AdminSearchStudentComponent', () => {
  let component: AdminSearchStudentComponent;
  let fixture: ComponentFixture<AdminSearchStudentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminSearchStudentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminSearchStudentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
