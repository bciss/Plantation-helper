import {Component, Input} from '@angular/core';
import { PlantInfos } from '../../services/plant-infos-model';

@Component({
  selector: 'app-plant-card',
  templateUrl: './plant-card.component.html',
  styleUrls: ['./plant-card.component.css']
})
export class PlantCardComponent {
   @Input() selectedPlant: PlantInfos;

  constructor() { }

  goToWiki () {
      window.open(`https://fr.wikipedia.org/wiki/${this.selectedPlant.name}`);
  }
}
