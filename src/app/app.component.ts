import { Component, OnInit } from '@angular/core';
import { LanguageService } from './language.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  text: any

  constructor(private langService: LanguageService){}

  currentLanguage = this.langService.currentLanguage

  isLogged = false

  ngOnInit(){
    this.text = this.langService.fetchText(this.currentLanguage)
    console.log(this.text)
  }
  
}
