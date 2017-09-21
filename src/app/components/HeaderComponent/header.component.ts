import { Component, OnInit, ElementRef } from '@angular/core';

import { LoggerService } from '../../global-services/logger.service';
import { AppService } from '../../global-services/app.service';
import { LocalizeService } from '../../global-components/LocalizeComponent/localize.service';

@Component({
  selector: 'header-section',
  template: require('./header.component.html'),
  styles: [require('./header.component.css').toString()],
  providers: []
})

export class HeaderComponent implements OnInit {
  constructor(private _loggerService: LoggerService,
    private _appService: AppService,
    private _localizeService: LocalizeService,
    protected elementRef: ElementRef) {
  }

  ngOnInit(): void {

  }
}