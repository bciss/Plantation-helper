import {Component, Input, OnInit} from '@angular/core';
import { PlantInfos } from '../../services/plant-infos-model';

@Component({
  selector: 'app-plant-card',
  templateUrl: './plant-card.component.html',
  styleUrls: ['./plant-card.component.css']
})
export class PlantCardComponent implements OnInit {
   @Input() selectedPlant: PlantInfos;

  constructor() { }

  ngOnInit() {
  }

  goToWiki () {
      window.open(`https://fr.wikipedia.org/wiki/${this.selectedPlant.name}`);
  }
}
