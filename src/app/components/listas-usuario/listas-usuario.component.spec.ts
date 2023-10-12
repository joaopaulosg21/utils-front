import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListasUsuarioComponent } from './listas-usuario.component';

describe('ListasUsuarioComponent', () => {
  let component: ListasUsuarioComponent;
  let fixture: ComponentFixture<ListasUsuarioComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListasUsuarioComponent]
    });
    fixture = TestBed.createComponent(ListasUsuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
