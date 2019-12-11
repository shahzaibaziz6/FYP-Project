import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FacultyFypAddComponent } from './faculty-fyp-add.component';

describe('FacultyFypAddComponent', () => {
  let component: FacultyFypAddComponent;
  let fixture: ComponentFixture<FacultyFypAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FacultyFypAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FacultyFypAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
