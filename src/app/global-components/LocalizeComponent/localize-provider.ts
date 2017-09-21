import { InjectionToken } from '@angular/core';

import * as resources from '../../../../l10n';

export const translations = new InjectionToken<string>('translations');

export const dictionary = loadResources();

export function loadResources() {
  var dictionary = {};

  for (const key of Object.keys(resources)) {
    dictionary[key] = resources[key];
  }

  return dictionary;
}

export const LocalizeProvider = [
  { provide: translations, useValue: dictionary }
];
