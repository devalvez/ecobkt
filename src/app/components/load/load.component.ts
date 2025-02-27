import { Component, OnInit } from '@angular/core';
import { AnimationItem } from 'lottie-web';
import { LottieComponent, AnimationOptions } from 'ngx-lottie';

@Component({
  selector: 'app-load',
  templateUrl: './load.component.html',
  styleUrls: ['./load.component.scss'],
  imports: [LottieComponent]
})
export class LoadComponent  implements OnInit {
  options: AnimationOptions = {
    path: '/assets/images/map.json',
  };
  constructor() { }

  ngOnInit() {}

}
