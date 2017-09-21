import { Component, AfterViewInit, ElementRef } from '@angular/core';

import { LoggerService } from '../../global-services/logger.service';
import { AppHelper } from '../../global-services/app.helper';
import { LocalizeService } from '../../global-components/LocalizeComponent/localize.service';

@Component({
  selector: 'nav-bar',
  template: require('./nav-bar.component.html'),
  styles: [require('./nav-bar.component.css').toString()],  
  providers: []
})

export class NavbarComponent implements AfterViewInit {
  public navbarItems: any = [];

  constructor(private _loggerService: LoggerService,
    private _appHelper: AppHelper,
    private _localizeService: LocalizeService,    
    protected elementRef: ElementRef) {
  }

  ngAfterViewInit(): void {
    this.getNavBarItems();
  }

  private getNavBarItems = function () {
    this._appHelper.getContent("content_tree").then((response) => {
      for (const key of Object.keys(response)) {
        if (response[key].name === "home") {
          var childList = response[key].child_id_list;

          childList.map((item, index) => {
            this.navbarItems.push(response[item]);
          });

          this._appHelper.setContent("navbar_items", this.navbarItems);

          break;
        }
      }
    });
  }
}