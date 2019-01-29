import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  gaming: string = "n64";
  gender: string = "f";
  os: string;
  music: string;
  month: string;
  year: number;

  musicAlertOpts: {
    title: string,
    subTitle: string
  }

  constructor(public navCtrl: NavController) {
    this.musicAlertOpts = {
      title: '1994 Music',
      subTitle: 'Select your favorite'
    }
  }

  stpSelect() {
    console.log('STP selected')
  }
}
