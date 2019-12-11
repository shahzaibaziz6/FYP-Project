import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnterFypComponent } from './enter-fyp.component';

describe('EnterFypComponent', () => {
  let component: EnterFypComponent;
  let fixture: ComponentFixture<EnterFypComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnterFypComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnterFypComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
