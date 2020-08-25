import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DescripcionAutoriaComponent } from './descripcion-autoria.component';

describe('DescripcionAutoriaComponent', () => {
  let component: DescripcionAutoriaComponent;
  let fixture: ComponentFixture<DescripcionAutoriaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DescripcionAutoriaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DescripcionAutoriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
