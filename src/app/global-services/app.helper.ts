import { Injectable, Inject } from '@angular/core';

var config = require('../app.config.js');
var myApp = {};

@Injectable()
export class AppHelper {
  getConfiguration(): any {
    return config.app;
  }

  getSection(key): any {
    return config.app[key];
  }

  getEndpoints(): any {
    var env = config.app.env;

    return config.app.endpoints[env];
  }

  setContent(key, response): any {
    myApp[key] = response;
  }

  getApp(): any {
    return myApp;
  }

  getContent(key): any {
    return this.getApp()[key];
  }
}