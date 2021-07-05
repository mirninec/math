import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { LanguageService } from '../services/language.service';

@Component({
  selector: 'app-change-lang',
  templateUrl: './change-lang.component.html',
  styleUrls: ['./change-lang.component.css'],
})
export class ChangeLangComponent implements OnInit, OnDestroy {

  constructor(private langService: LanguageService) {}

  textSub!: Subscription

  currentLanguage!: string
  text:any

  ngOnInit(): void {
    this.currentLanguage = this.langService.currentLanguage;
    this.text = this.langService.text
    this.textSub = this.langService.textSbj.subscribe(
      data => {
        this.text = data
      }
    )
  }

  changeLanguage(newLanguage: string){
    this.langService.changeLanguage(newLanguage)
    this.currentLanguage = this.langService.currentLanguage
  }

  ngOnDestroy(){
    this.textSub.unsubscribe()
  }
}
