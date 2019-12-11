import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FaultyDashboardProfileComponent } from './faulty-dashboard-profile.component';

describe('FaultyDashboardProfileComponent', () => {
  let component: FaultyDashboardProfileComponent;
  let fixture: ComponentFixture<FaultyDashboardProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FaultyDashboardProfileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FaultyDashboardProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
