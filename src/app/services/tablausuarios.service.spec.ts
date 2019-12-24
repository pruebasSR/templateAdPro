import { TestBed } from '@angular/core/testing';

import { TablausuariosService } from './tablausuarios.service';

describe('TablausuariosService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TablausuariosService = TestBed.get(TablausuariosService);
    expect(service).toBeTruthy();
  });
});
