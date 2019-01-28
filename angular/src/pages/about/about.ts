import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

  monthList= [];

  constructor(public navCtrl: NavController) {
    this.monthList = [
      "Jan", "Feb", "Mar", "April", "May", "Jun",
      "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
    ]

    console.log(this.monthList)
  }

}
