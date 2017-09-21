import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { LoggerService } from './logger.service';
import { AppHelper } from './app.helper';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class AppService {
  private api: any;

  constructor(private _loggerService: LoggerService, private _appHelper: AppHelper, private http: Http) {
    this.api = this._appHelper.getEndpoints();
  }

  getNavBarItems(): Promise<any> {
    return this.http.get("assets/stubs/content_tree.json")
      .toPromise()
      .then(this.extractData)
      .catch(this.handleError);
  }

  getFeaturedContent(): Promise<any> {
    return this.http.get("assets/stubs/featured.json")
      .toPromise()
      .then(this.extractData)
      .catch(this.handleError);
  }

  getMenuLookUp(): Promise<any> {
    return this.http.get("assets/stubs/content/lookup")
      .toPromise()
      .then(this.extractData)
      .catch(this.handleError);
  }

  getContentItems(categoryID): Promise<any> {
    return this.http.get("assets/stubs/" + categoryID + ".json")
      .toPromise()
      .then(this.extractData)
      .catch(this.handleError);
  }

  private extractData(response: Response) {
    return response.json() || {};
  }

  private handleError(error: any): Promise<any> {
    return Promise.reject(error.message || error);
  }
}