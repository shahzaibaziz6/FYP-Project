import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FaultyDashboardComponent } from './faulty-dashboard.component';

describe('FaultyDashboardComponent', () => {
  let component: FaultyDashboardComponent;
  let fixture: ComponentFixture<FaultyDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FaultyDashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FaultyDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
