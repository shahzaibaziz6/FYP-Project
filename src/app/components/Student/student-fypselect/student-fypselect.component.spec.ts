import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentFYPSelectComponent } from './student-fypselect.component';

describe('StudentFYPSelectComponent', () => {
  let component: StudentFYPSelectComponent;
  let fixture: ComponentFixture<StudentFYPSelectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentFYPSelectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentFYPSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
