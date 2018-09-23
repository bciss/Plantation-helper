import { Injectable } from '@angular/core';
import { MockDB } from '../mock/plant-infos';
import { PlantInfos } from './plant-infos-model';


/*
** this service is the link between this application and the Database PlantInfosDB
 */
@Injectable({
  providedIn: 'root'
})
export class PlantInfosService {

  // TODO: link with an actual DB
  constructor() {
  }

    getPlantInfos(p_name: string): Promise<any> {
        return new Promise(resolve => {
            resolve(MockDB[p_name] as PlantInfos);
        });
    }

    getTodaysPlantation(p_date: Date): string[] {
      const todaysList: string[] = [];
        for (const plant in MockDB) {
            if (p_date >= MockDB[plant].plantation.from && p_date <= MockDB[plant].plantation.upto) {
                todaysList.push(MockDB[plant].name);
            }
        }
        return todaysList;
    }

    getTodaysHarvest(p_date: Date): string[] {
        const todaysList: string[] = [];
        for (const plant in MockDB) {
            if (p_date >= MockDB[plant].harvest.from && p_date <= MockDB[plant].harvest.upto) {
                todaysList.push(MockDB[plant].name);
            }
        }
        return todaysList;
    }
}
