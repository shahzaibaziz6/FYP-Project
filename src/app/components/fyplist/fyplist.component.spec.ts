import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FyplistComponent } from './fyplist.component';

describe('FyplistComponent', () => {
  let component: FyplistComponent;
  let fixture: ComponentFixture<FyplistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FyplistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FyplistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
