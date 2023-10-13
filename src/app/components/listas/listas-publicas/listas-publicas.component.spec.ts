import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListasPublicasComponent } from './listas-publicas.component';

describe('ListasPublicasComponent', () => {
  let component: ListasPublicasComponent;
  let fixture: ComponentFixture<ListasPublicasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListasPublicasComponent]
    });
    fixture = TestBed.createComponent(ListasPublicasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
