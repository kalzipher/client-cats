import { TestBed } from '@angular/core/testing';

import { ToUpdateCatResolver } from './to-update-cat.resolver';

describe('ToUpdateCatResolver', () => {
  let resolver: ToUpdateCatResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(ToUpdateCatResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
