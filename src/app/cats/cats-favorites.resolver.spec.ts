import { TestBed } from '@angular/core/testing';

import { CatsFavoritesResolver } from './cats-favorites.resolver';

describe('CatsFavoritesResolver', () => {
  let resolver: CatsFavoritesResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(CatsFavoritesResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
