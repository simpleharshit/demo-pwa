import { Injectable, Inject } from '@angular/core';

import { translations } from './localize-provider';

@Injectable()
export class LocalizeService {
  private _selectedLanguage: string;

  constructor( @Inject(translations) private _translations: any) { }

  public get getLanguage(): string {
    return this._selectedLanguage;
  }

  public setLanguage(language: string): void {
    this._selectedLanguage = language;
  }

  public localize(key: string) {
    return this.translate(key)
  }

  private translate(key: string): string {
    if (this._translations[this._selectedLanguage] && this._translations[this._selectedLanguage][key]) {
      return this._translations[this._selectedLanguage][key];
    }

    return key;
  }
}
