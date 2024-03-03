import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RankingQuizComponent } from './ranking-quiz.component';

describe('RankingQuizComponent', () => {
  let component: RankingQuizComponent;
  let fixture: ComponentFixture<RankingQuizComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RankingQuizComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RankingQuizComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
