import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminAddFaultyComponent } from './admin-add-faulty.component';

describe('AdminAddFaultyComponent', () => {
  let component: AdminAddFaultyComponent;
  let fixture: ComponentFixture<AdminAddFaultyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminAddFaultyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminAddFaultyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
