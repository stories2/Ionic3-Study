import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {

  bold:boolean = false;
  italic:boolean = false;
  large:boolean = false;

  dynamicStyle = {
    'font-style': 'normal',
    'font-weight': 'normal',
    'font-size': '12px'
  }

  constructor(public navCtrl: NavController) {

  }

  updateStyle() {
    this.dynamicStyle = {
      'font-style': this.italic ? 'italic' : 'normal',
      'font-weight': this.bold ? 'bold' : 'normal',
      'font-size': this.large ? '24px' : '12px'
    }
  }
}
