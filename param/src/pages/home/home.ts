import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { NextPage } from '../next/next';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  inputNumber:number;
  returnMessage: string = "N/A";

  constructor(public navCtrl: NavController) {

  }

  passDataToNextPage() {
    this.navCtrl.push(NextPage, {
      number: this.inputNumber,
      callback: this.callbackFunc
    })
  }

  callbackFunc = function(params) {
    for(var index = 0; index < params.length; index += 1) {
      this.returnMessage += params[index].toString()
    }
    console.log("return set", params, this.returnMessage);
    return new Promise(function(resolve, reject) {
      console.log("return", params);
      resolve()
    })
  }
}
