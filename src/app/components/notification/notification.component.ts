import { Component, OnInit } from '@angular/core';
import {PlantInfosService} from '../../services/plant-infos.service';
import * as moment from 'moment';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.css']
})
export class NotificationComponent implements OnInit {

  date: Date;
  todaysPlantation;
  todaysHarvest;

  constructor(private plantInfosService: PlantInfosService) { }

  ngOnInit() {
    this.date = new Date();
    this.todaysToDoList();
  }

  // update the infos of what you need to take care of today
  todaysToDoList() {
    this.todaysPlantation = this.plantInfosService.getTodaysPlantation(<Date><any>moment(this.date).format('MM/DD/YYYY'));
    this.todaysHarvest = this.plantInfosService.getTodaysHarvest(<Date><any>moment(this.date).format('MM/DD/YYYY'));
  }
}
