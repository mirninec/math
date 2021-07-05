import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { LanguageService } from './services/language.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  textSub!: Subscription

  text: any

  constructor(private langService: LanguageService){}

  currentLanguage = this.langService.currentLanguage

  isLogged = false

  ngOnInit(){
    this.text = this.langService.fetchText(this.currentLanguage)
    this.textSub = this.langService.textSbj.subscribe(
      data => {
        this.text = data
      }
    )
  }  

  ngOnDestroy(){
    this.textSub.unsubscribe()
  }
  
}
