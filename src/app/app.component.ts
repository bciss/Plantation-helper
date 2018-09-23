import {Component, Input, OnInit} from '@angular/core';
import { PlantInfosService } from './services/plant-infos.service';
import { PlantInfos } from './services/plant-infos-model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Platation Helper';

  @Input() selectedPlant: PlantInfos;

  constructor(private plantInfosService: PlantInfosService) {}

  ngOnInit() {}

  searchPlant (p_name: string) {
    this.plantInfosService.getPlantInfos(p_name).then(value => {
      this.selectedPlant = value as PlantInfos;
      console.log(this.selectedPlant);
    });
  }
}
