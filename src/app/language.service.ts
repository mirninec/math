import { Injectable, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
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
export class LanguageService {

  // содержит текс всего приложения
  text = text_en

  // подписка для отправки текста приложения
  textSbj = new Subject<any>()

  // отображает текущий язык для всего приложения
  currentLanguage = 'english';

  constructor() {}

  // смена языка
  changeLanguage(newLanguage: string): void {
    // если новый язык совпадаем с уже установленным, ничего не делаем
    if ((this.currentLanguage === newLanguage)) {
      console.log('уже установлен')
      return;
    }
    // иначе, 
    // this.text = this.fetchText(newLanguage)
    this.textSbj.next(this.fetchText(newLanguage));
    this.currentLanguage = newLanguage;
    console.log(this.currentLanguage)
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
      case 'portuguese':
        return text_pr;
      default:
        return this.currentLanguage;
    }
  }
}
