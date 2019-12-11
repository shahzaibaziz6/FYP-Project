import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavFacultyDashboardComponent } from './nav-faculty-dashboard.component';

describe('NavFacultyDashboardComponent', () => {
  let component: NavFacultyDashboardComponent;
  let fixture: ComponentFixture<NavFacultyDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavFacultyDashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavFacultyDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
