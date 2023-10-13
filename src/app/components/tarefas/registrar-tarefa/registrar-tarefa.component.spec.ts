import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrarTarefaComponent } from './registrar-tarefa.component';

describe('RegistrarTarefaComponent', () => {
  let component: RegistrarTarefaComponent;
  let fixture: ComponentFixture<RegistrarTarefaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RegistrarTarefaComponent]
    });
    fixture = TestBed.createComponent(RegistrarTarefaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
