import { TestBed, inject } from '@angular/core/testing';

import { PlantInfosService } from './plant-infos.service';
import { MockDB } from '../mock/plant-infos';
import * as moment from 'moment';

describe('PlantInfosService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PlantInfosService]
    });
  });

  it('should be created', inject([PlantInfosService], (service: PlantInfosService) => {
    expect(service).toBeTruthy();
  }));

  it('should getPlantInfos', inject([PlantInfosService], (service: PlantInfosService) => {
    service.getPlantInfos('fruit1').then(value => {
      expect(value).toEqual(MockDB.fruit1);
    });
  }));

  it('should get undefined on non existing plant', inject([PlantInfosService], (service: PlantInfosService) => {
      service.getPlantInfos('fruit99').then(value => {
          expect(value).toEqual(undefined);
      });
  }));

  it('should getTodaysPlantation', inject([PlantInfosService], (service: PlantInfosService) => {
      expect(service.getTodaysPlantation(<Date><any>moment('01/24/2018').format('MM/DD/YYYY')))
          .toEqual(['legume3']);
  }));

    it('should getTodaysHarvest', inject([PlantInfosService], (service: PlantInfosService) => {
        expect(service.getTodaysHarvest(<Date><any>moment('06/24/2018').format('MM/DD/YYYY')))
            .toEqual(['legume1']);
    }));
});
