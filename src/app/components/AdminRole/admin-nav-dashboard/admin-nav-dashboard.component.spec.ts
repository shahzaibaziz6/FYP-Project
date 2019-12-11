import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminNavDashboardComponent } from './admin-nav-dashboard.component';

describe('AdminNavDashboardComponent', () => {
  let component: AdminNavDashboardComponent;
  let fixture: ComponentFixture<AdminNavDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminNavDashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminNavDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
