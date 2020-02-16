import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UiFormErrorComponent } from './ui-form-error.component';

describe('UiFormErrorComponent', () => {
  let component: UiFormErrorComponent;
  let fixture: ComponentFixture<UiFormErrorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UiFormErrorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UiFormErrorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
