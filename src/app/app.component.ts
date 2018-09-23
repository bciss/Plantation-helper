import { Component } from '@angular/core';
import {PlantInfosService} from './services/plant-infos.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Platation Helper';

  constructor(private plantInfosService: PlantInfosService) {

  }
}
