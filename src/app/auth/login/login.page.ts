import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import {
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
  FormControl,
} from '@angular/forms';

import {
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonLabel,
  IonCheckbox,
  IonButton,
} from '@ionic/angular/standalone';
import { NgxMaskDirective, NgxMaskPipe, provideNgxMask } from "ngx-mask";
import { AuthLayoutComponent } from "../../components/auth-layout/auth-layout.component";

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: true,
  imports: [
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    CommonModule,
    FormsModule,
    IonLabel,
    IonButton,
    IonCheckbox,
    AuthLayoutComponent,
    NgxMaskDirective,
    ReactiveFormsModule,
  ],
  providers: [provideNgxMask()],
})
export class LoginPage implements OnInit {

  loginForm = new FormGroup({
    phone: new FormControl('', [Validators.required]),
    agree: new FormControl(false, [Validators.requiredTrue]),
  })

  constructor() { }

  ngOnInit() {}
  
  onSubmit() {
    if(this.loginForm.valid) {
      console.log(this.loginForm.value)
    }
  }

}
