import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TituloHistoriaComponent } from './titulo-historia.component';

describe('TituloHistoriaComponent', () => {
  let component: TituloHistoriaComponent;
  let fixture: ComponentFixture<TituloHistoriaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TituloHistoriaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TituloHistoriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
