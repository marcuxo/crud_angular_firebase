import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaAgregarComponent } from './lista-agregar.component';

describe('ListaAgregarComponent', () => {
  let component: ListaAgregarComponent;
  let fixture: ComponentFixture<ListaAgregarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaAgregarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaAgregarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
