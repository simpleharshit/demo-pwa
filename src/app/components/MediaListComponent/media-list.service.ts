import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { LoggerService } from '../../global-services/logger.service';
import { AppHelper } from '../../global-services/app.helper';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class MediaListService {
  private api: any;

  constructor(private _loggerService: LoggerService, private _appHelper: AppHelper, private http: Http) {
    this.api = this._appHelper.getEndpoints();
  }

  getListingSection(): Promise<any> {
    return this.http.get(this.api.url() + "movies.json")
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