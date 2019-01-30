import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { NextPage } from '../next/next';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  inputNumber:number;

  constructor(public navCtrl: NavController) {

  }

  passDataToNextPage() {
    this.navCtrl.push(NextPage, {number: this.inputNumber})
  }
}
