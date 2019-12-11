import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminSearchFaultyComponent } from './admin-search-faulty.component';

describe('AdminSearchFaultyComponent', () => {
  let component: AdminSearchFaultyComponent;
  let fixture: ComponentFixture<AdminSearchFaultyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminSearchFaultyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminSearchFaultyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
