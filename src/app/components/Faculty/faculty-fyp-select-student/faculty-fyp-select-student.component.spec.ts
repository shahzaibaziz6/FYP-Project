import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FacultyFypSelectStudentComponent } from './faculty-fyp-select-student.component';

describe('FacultyFypSelectStudentComponent', () => {
  let component: FacultyFypSelectStudentComponent;
  let fixture: ComponentFixture<FacultyFypSelectStudentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FacultyFypSelectStudentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FacultyFypSelectStudentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
