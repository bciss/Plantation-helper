import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlantCardComponent } from './plant-card.component';
import {MatCardModule} from '../../../../node_modules/@angular/material/card';
import { MockDB } from '../../mock/plant-infos';
import {PlantInfos} from '../../services/plant-infos-model';

describe('PlantCardComponent', () => {
  let component: PlantCardComponent;
  let fixture: ComponentFixture<PlantCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
        declarations: [
            PlantCardComponent,
        ],
        imports: [
            MatCardModule
        ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlantCardComponent);
    component = fixture.componentInstance;
    component.selectedPlant = MockDB.fruit1;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
