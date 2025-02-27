import { Component, OnInit, ViewChild, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, FormControl, FormGroup } from '@angular/forms';
import {
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonModal,
  IonButtons,
  IonButton,
  IonList,
  IonItem,
  IonSelect,
  IonSelectOption
} from '@ionic/angular/standalone';
import { MainLayoutComponent } from '../../components/main-layout/main-layout.component';


@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  standalone: true,
  imports: [
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    CommonModule,
    FormsModule,
    IonButtons,
    IonButton,
    IonList,
    IonItem,
    IonModal,
    IonSelect,    
    IonSelectOption,
    MainLayoutComponent,
  ],
})

export class HomePage implements OnInit {

  @ViewChild('travelModal') travelModal!: IonModal

  travel: any = {
    starting: '',
    finishing: '',
    stops: [],
  };
  travelStarted = false;
  modalBreakpoint = 0.25;

  ngOnInit() {
    this.travel.starting = 'Vista da serra II, Serra-ES';
    this.travel.finishing = 'Praia da bosta, Vila Velha-ES';
  }

  expandModal = () => {
    this.modalBreakpoint = 1;
  }

  startTravel(event: any) {
    this.travel.starting = 'Vista da serra I, Serra-ES';
  }

  finishTravel(event: any) {
    this.travel.finishing = 'Vitória Cetro, Vitória-ES';
  }

  addStopTravel() {
    this.travel.stops = [
      ...this.travel.stops,
      { address: '' },
    ];
    console.log(this.travel.stops)
  }

  stopsTravel(event: any) {
    this.travel.stops = [
      ...this.travel.stops,
      { address: 'Itapoã, Vila Velha-ES' },
    ];
  }
}
