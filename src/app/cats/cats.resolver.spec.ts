import { TestBed } from '@angular/core/testing';

import { CatsResolver } from './cats.resolver';

describe('CatsResolver', () => {
  let resolver: CatsResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(CatsResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
