import { TestBed, inject } from '@angular/core/testing';

import { DistanceMatrixService } from './distance-matrix.service';

describe('DistanceMatrixService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DistanceMatrixService]
    });
  });

  it('should be created', inject([DistanceMatrixService], (service: DistanceMatrixService) => {
    expect(service).toBeTruthy();
  }));
});
