import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TarefasDoDiaComponent } from './tarefas-do-dia.component';

describe('TarefasDoDiaComponent', () => {
  let component: TarefasDoDiaComponent;
  let fixture: ComponentFixture<TarefasDoDiaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TarefasDoDiaComponent]
    });
    fixture = TestBed.createComponent(TarefasDoDiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
