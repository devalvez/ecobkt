import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {
  IonButton,
  IonContent,
  IonHeader,
  IonItem,
  IonMenu,
  IonMenuToggle,
  IonRadio,
  IonRadioGroup,
  IonTitle,
  IonToolbar,
  IonMenuButton,
  IonIcon,
  IonList
} from '@ionic/angular/standalone';

@Component({
  selector: 'app-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.scss'],
  imports: [
    IonButton,
    IonContent,
    IonHeader,
    IonItem,
    IonMenu,
    IonMenuButton,
    IonMenuToggle,
    IonRadio,
    IonRadioGroup,
    IonTitle,
    IonToolbar,
    IonIcon,
    IonList,
    FormsModule,
  ],
  standalone: true,
})
export class MainLayoutComponent  implements OnInit {
  menuType: string = 'overlay';

  constructor() {}

  ngOnInit() {}

}
