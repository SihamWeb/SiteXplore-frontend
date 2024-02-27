import { TestBed } from '@angular/core/testing';

import { MemberSpaceService } from './member-space.service';

describe('MemberSpaceService', () => {
  let service: MemberSpaceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MemberSpaceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
