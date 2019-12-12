import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentNavDashboardComponent } from './student-nav-dashboard.component';

describe('StudentNavDashboardComponent', () => {
  let component: StudentNavDashboardComponent;
  let fixture: ComponentFixture<StudentNavDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentNavDashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentNavDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
