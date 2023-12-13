import { TestBed } from '@angular/core/testing';

import { TokenIntersepterService } from './token-intersepter.service';

describe('TokenIntersepterService', () => {
  let service: TokenIntersepterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TokenIntersepterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
