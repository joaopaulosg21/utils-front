import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrarListaComponent } from './registrar-lista.component';

describe('RegistrarListaComponent', () => {
  let component: RegistrarListaComponent;
  let fixture: ComponentFixture<RegistrarListaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RegistrarListaComponent]
    });
    fixture = TestBed.createComponent(RegistrarListaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
