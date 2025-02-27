import { Component, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonModal,
  IonButtons,
  IonButton,
  IonItem,
} from '@ionic/angular/standalone';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
  imports: [IonModal, CommonModule]
})
export class ModalComponent  implements OnInit {
  @ViewChild('travelModal') travelModal!: IonModal


  constructor() { }

  ngOnInit() {}

}
