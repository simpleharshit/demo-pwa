import { Pipe, PipeTransform } from '@angular/core';

import { LocalizeService } from './localize.service';

@Pipe({ name: 'localize', pure: false })
export class LocalizePipe implements PipeTransform {
  constructor(private _localizeService: LocalizeService) { }

  transform(key: string, args: any[]): any {
    if (!key) return;

    return this._localizeService.localize(key);
  }
}
