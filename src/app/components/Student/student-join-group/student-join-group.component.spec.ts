import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentJoinGroupComponent } from './student-join-group.component';

describe('StudentJoinGroupComponent', () => {
  let component: StudentJoinGroupComponent;
  let fixture: ComponentFixture<StudentJoinGroupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentJoinGroupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentJoinGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
