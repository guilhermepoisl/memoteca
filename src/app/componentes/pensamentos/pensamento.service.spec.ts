import { TestBed } from '@angular/core/testing';
import { HttpClient } from '@angular/common/http';
import { PensamentoService } from './pensamento.service';


describe('PensamentoService', () => {
  let service: PensamentoService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClient]
    });
    service = TestBed.inject(PensamentoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
