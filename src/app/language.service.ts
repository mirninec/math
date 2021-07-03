import { Injectable, OnInit } from '@angular/core';
import { text_en } from './languages/english';
import { text_fr } from './languages/french';
import { text_gr } from './languages/german';
import { text_it } from './languages/italian';
import { text_pr } from './languages/portuguese';
import { text_ru } from './languages/russian';
import { text_sp } from './languages/spanish';

@Injectable({
  providedIn: 'root',
})
export class LanguageService implements OnInit {
  text: any;

  currentLanguage = 'english';

  constructor() {}

  changeLanguage(newLanguage: string) {
    this.currentLanguage = newLanguage;
  }

  fetchText(lang: string) {
    switch (lang) {
      case 'russian':
        return text_ru;
      case 'english':
        return text_en;
      case 'french':
        return text_fr;
      case 'german':
        return text_gr;
      case 'italian':
        return text_it;
      case 'spanish':
        return text_sp;
      case 'poruguese':
        return text_pr;
      default:
        return this.currentLanguage;
    }
  }

  ngOnInit() {
    this.text = this.fetchText(this.currentLanguage);
  }
}
