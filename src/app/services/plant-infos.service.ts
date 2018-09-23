import { Injectable } from '@angular/core';
import { MockDB } from '../mock/plant-infos';

@Injectable({
  providedIn: 'root'
})
export class PlantInfosService {

  constructor() {
  }

    getPlantInfos(p_name: string): Promise<any> {
        return new Promise(resolve => {
            resolve(MockDB[p_name]);
        });
    }
}
