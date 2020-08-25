import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckboxObraPotencialComponent } from './checkbox-obra-potencial.component';

describe('CheckboxObraPotencialComponent', () => {
  let component: CheckboxObraPotencialComponent;
  let fixture: ComponentFixture<CheckboxObraPotencialComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CheckboxObraPotencialComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckboxObraPotencialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
