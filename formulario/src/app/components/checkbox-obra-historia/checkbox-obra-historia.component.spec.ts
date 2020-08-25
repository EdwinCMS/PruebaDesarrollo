import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckboxObraHistoriaComponent } from './checkbox-obra-historia.component';

describe('CheckboxObraHistoriaComponent', () => {
  let component: CheckboxObraHistoriaComponent;
  let fixture: ComponentFixture<CheckboxObraHistoriaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CheckboxObraHistoriaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckboxObraHistoriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
