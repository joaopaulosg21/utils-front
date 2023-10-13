import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TarefasUsuarioComponent } from './tarefas-usuario.component';

describe('TarefasUsuarioComponent', () => {
  let component: TarefasUsuarioComponent;
  let fixture: ComponentFixture<TarefasUsuarioComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TarefasUsuarioComponent]
    });
    fixture = TestBed.createComponent(TarefasUsuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
