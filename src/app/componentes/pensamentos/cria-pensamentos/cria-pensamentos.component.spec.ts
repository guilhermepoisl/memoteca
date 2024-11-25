import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CriaPensamentosComponent } from './cria-pensamentos.component';

describe('CriaPensamentosComponent', () => {
  let component: CriaPensamentosComponent;
  let fixture: ComponentFixture<CriaPensamentosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CriaPensamentosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CriaPensamentosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
