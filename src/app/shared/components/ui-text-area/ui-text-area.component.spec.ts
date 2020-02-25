import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UiTextAreaComponent } from './ui-text-area.component';

describe('UiTextAreaComponent', () => {
  let component: UiTextAreaComponent;
  let fixture: ComponentFixture<UiTextAreaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UiTextAreaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UiTextAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
