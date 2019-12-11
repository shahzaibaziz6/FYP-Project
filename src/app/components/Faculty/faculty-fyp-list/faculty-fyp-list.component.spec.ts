import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FacultyFypListComponent } from './faculty-fyp-list.component';

describe('FacultyFypListComponent', () => {
  let component: FacultyFypListComponent;
  let fixture: ComponentFixture<FacultyFypListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FacultyFypListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FacultyFypListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
