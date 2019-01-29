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

  cancelText: string = "Cancel";
  okText: string = "Ok";

  englishButtonColor: string = "secondary";
  koreanButtonColor: string = "primary";

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

  selectKorean() {
    this.cancelText = "취소";
    this.okText = "확인";
    this.englishButtonColor = "primary";
    this.koreanButtonColor = "secondary";
  }

  selectEnglish() {
    this.cancelText = "Cancel";
    this.okText = "Ok";
    this.englishButtonColor = "secondary";
    this.koreanButtonColor = "primary";
  }
}
