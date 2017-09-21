import { Component, OnInit, OnDestroy } from '@angular/core';

import { LoggerService } from '../../global-services/logger.service';
import { AppService } from '../../global-services/app.service';
import { LocalizeService } from '../../global-components/LocalizeComponent/localize.service';

@Component({
  template: require('./home.component.html'),
  styles: [require('./home.component.css').toString()]
})

export class HomeComponent implements OnInit, OnDestroy {
  constructor(private _loggerService: LoggerService, private _appService: AppService, private _localizeService: LocalizeService) { }

  ngOnInit(): void {
    console.log("home.component: ngOnInit");
  }

  ngOnDestroy(): void {
    console.log("home.component: ngOnDestroy");
  }
}