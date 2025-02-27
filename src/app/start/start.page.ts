import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/angular/standalone';

@Component({
  selector: 'app-start',
  templateUrl: 'start.page.html',
  styleUrls: ['start.page.scss'],
  imports: [IonHeader, IonToolbar, IonTitle, IonContent],
})
export class StartPage {
  constructor() {}
}
