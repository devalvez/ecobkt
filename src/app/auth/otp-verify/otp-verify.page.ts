import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
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
import { NgxMaskDirective, provideNgxMask } from 'ngx-mask';
import { AuthLayoutComponent } from '../../components/auth-layout/auth-layout.component';

@Component({
  selector: 'app-otp-verify',
  templateUrl: './otp-verify.page.html',
  styleUrls: ['./otp-verify.page.scss'],
  standalone: true,
  imports: [
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    CommonModule,
    ReactiveFormsModule,
    IonLabel,
    IonButton,
    IonCheckbox,
    AuthLayoutComponent,
    NgxMaskDirective,
    FormsModule,
  ],
  providers: [provideNgxMask()],
})
export class OtpVerifyPage implements OnInit {

  otpForm = new FormGroup({
    otp: new FormControl('', [Validators.required]),
  })

  constructor() {}

  ngOnInit() {}

  onSubmit() {
    console.log(this.otpForm.value)
  }
}
