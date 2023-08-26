import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdutoTelaComponent } from './produto-tela.component';

describe('ProdutoTelaComponent', () => {
  let component: ProdutoTelaComponent;
  let fixture: ComponentFixture<ProdutoTelaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProdutoTelaComponent]
    });
    fixture = TestBed.createComponent(ProdutoTelaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
