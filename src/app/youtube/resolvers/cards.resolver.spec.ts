import { TestBed } from '@angular/core/testing';

import { CardsResolver } from './cards.resolver';

describe('CardsResolver', () => {
  let resolver: CardsResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(CardsResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
