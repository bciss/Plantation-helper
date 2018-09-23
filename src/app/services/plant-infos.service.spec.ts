import { TestBed, inject } from '@angular/core/testing';

import { PlantInfosService } from './plant-infos.service';

describe('PlantInfosService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PlantInfosService]
    });
  });

  it('should be created', inject([PlantInfosService], (service: PlantInfosService) => {
    expect(service).toBeTruthy();
  }));
});
