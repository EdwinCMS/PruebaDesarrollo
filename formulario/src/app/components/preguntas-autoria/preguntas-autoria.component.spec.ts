import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PreguntasAutoriaComponent } from './preguntas-autoria.component';

describe('PreguntasAutoriaComponent', () => {
  let component: PreguntasAutoriaComponent;
  let fixture: ComponentFixture<PreguntasAutoriaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PreguntasAutoriaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PreguntasAutoriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
