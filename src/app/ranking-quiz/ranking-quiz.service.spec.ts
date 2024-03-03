import { TestBed } from '@angular/core/testing';

import { RankingQuizService } from './ranking-quiz.service';

describe('RankingQuizService', () => {
  let service: RankingQuizService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RankingQuizService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
