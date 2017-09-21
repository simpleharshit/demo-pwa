import { Component, OnInit } from '@angular/core';

import { LoggerService } from '../../global-services/logger.service';
import { AppService } from '../../global-services/app.service';
import { AppHelper } from '../../global-services/app.helper';
import { LocalizeService } from '../../global-components/LocalizeComponent/localize.service';

@Component({
  selector: 'body',
  template: require('./app.component.html'),
  styles: [require('./app.component.css').toString()],
  providers: [AppService]
})

export class AppComponent implements OnInit {
  constructor(private _loggerService: LoggerService,
    private _appService: AppService,
    private _appHelper: AppHelper,
    private _localizeService: LocalizeService) { }

  ngOnInit(): void {
    var appConfig = this._appHelper.getConfiguration();    

    this._localizeService.setLanguage(appConfig.defaultLanguage);    

    this._appHelper.setContent("content_tree", this._appService.getNavBarItems());
    this._appHelper.setContent("featured_content", this._appService.getFeaturedContent());
    // this._appHelper.setContent("menu_lookup", this._appService.getMenuLookUp());
  }
}