import { TestBed } from '@angular/core/testing';

import { ArticleFeedService } from './article-feed.service';

describe('ArticleFeedService', () => {
  let service: ArticleFeedService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ArticleFeedService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
