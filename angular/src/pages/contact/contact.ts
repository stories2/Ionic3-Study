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
  hiddenFlag:boolean = false;
  fontSize:string;

  dynamicStyle = {
    'font-style': 'normal',
    'font-weight': 'normal',
    'font-size': '12px'
  }

  constructor(public navCtrl: NavController) {

  }

  fontSizeChange() {
    console.log("font-size", this.fontSize)
  }

  updateStyle() {
    this.dynamicStyle = {
      'font-style': this.italic ? 'italic' : 'normal',
      'font-weight': this.bold ? 'bold' : 'normal',
      'font-size': this.large ? '24px' : '12px'
    }
  }

  showClick() {
    this.hiddenFlag = false;
  }

  hideClick() {
    this.hiddenFlag = true;
  }
}
