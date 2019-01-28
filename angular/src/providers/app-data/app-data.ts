// import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the AppDataProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class AppDataProvider {

  appName:string="Ionic3 Study App"

  constructor() {
    console.log('Hello AppDataProvider Provider');
  }

  getAppName() {
    return this.appName
  }
}
