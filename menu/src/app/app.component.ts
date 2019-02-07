import { Component } from '@angular/core';
import { Platform, App } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { SettingPage } from '../pages/setting/setting';
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = HomePage;
  currentPage:string = 'HomePage';

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, private app: App) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }

  checkPageHidden(pageName) {
    if(this.currentPage == pageName) {
      return true;
    }
    return false;
  }

  openSettingPage() {
    this.app.getRootNavs()[0].setRoot(SettingPage)
    setTimeout(() => {
      this.currentPage = 'SettingPage';
    }, 500)
  }

  openHomePage() {
    this.app.getRootNavs()[0].setRoot(HomePage)
    setTimeout(() => {
      this.currentPage = 'HomePage';
    }, 500)
  }

  // exit() {
  //   this.platform.exitApp()
  // }
}

