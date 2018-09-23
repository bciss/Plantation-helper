import {Component, OnInit} from '@angular/core';
import {PlantInfosService} from './services/plant-infos.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'Platation Helper';

  constructor(private plantInfosService: PlantInfosService) {}

  ngOnInit() {}

  searchPlant (p_name: string) {
    this.plantInfosService.getPlantInfos(p_name).then(value => {
      console.log(value);
    });
  }
}
