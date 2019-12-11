import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminNavDashboardlsComponent } from './admin-nav-dashboardls.component';

describe('AdminNavDashboardlsComponent', () => {
  let component: AdminNavDashboardlsComponent;
  let fixture: ComponentFixture<AdminNavDashboardlsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminNavDashboardlsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminNavDashboardlsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
