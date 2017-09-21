import { Component, ElementRef, OnChanges, Input} from '@angular/core';

import { LoggerService } from '../../global-services/logger.service';
import { AppHelper } from '../../global-services/app.helper';
import { LocalizeService } from '../../global-components/LocalizeComponent/localize.service';

import { MediaListService } from './media-list.service';

@Component({
    selector: 'media-list-section',
    template: require('./media-list.component.html'),
    styles: [require('./media-list.component.css').toString()],
    providers: [MediaListService],
})

export class MediaListComponent implements OnChanges {
    @Input() category: string;

    listElement: any;    

    constructor(private loggerService: LoggerService, private _appHelper: AppHelper, private _localizeService: LocalizeService, private _mediaListService: MediaListService, protected elementRef: ElementRef) { }

    ngOnChanges():void{
        var mediaList = this._appHelper.getContent(this.category);

        this.listElement = this.elementRef.nativeElement.querySelector("media-list");

        if(this.listElement && mediaList){            
            this.listElement.setAttribute("all-data", JSON.stringify(mediaList));
            this.elementRef.nativeElement.parentElement.classList.add("hidelisting");
        }
    }
}