import { TestBed } from '@angular/core/testing';

import { ServRoutParamsService } from './serv-rout-params.service';

describe('ServRoutParamsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ServRoutParamsService = TestBed.get(ServRoutParamsService);
    expect(service).toBeTruthy();
  });
});
