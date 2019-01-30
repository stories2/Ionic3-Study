import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the NextPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-next',
  templateUrl: 'next.html',
})
export class NextPage {

  inputNumber:number;
  returnMessage:string;
  callbackFunc;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.inputNumber = navParams.get('number')
    this.callbackFunc = navParams.get('callback')
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NextPage');
  }

  submit() {
    var navControl = this.navCtrl
    this.callbackFunc(this.returnMessage).then(function(){
      navControl.pop()
    })
  }
}
