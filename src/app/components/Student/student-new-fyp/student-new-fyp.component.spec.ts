import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentNewFYPComponent } from './student-new-fyp.component';

describe('StudentNewFYPComponent', () => {
  let component: StudentNewFYPComponent;
  let fixture: ComponentFixture<StudentNewFYPComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentNewFYPComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentNewFYPComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
