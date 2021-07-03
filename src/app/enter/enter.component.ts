import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { LanguageService } from '../language.service';

@Component({
  selector: 'app-enter',
  templateUrl: './enter.component.html',
  styleUrls: ['./enter.component.css'],
})
export class EnterComponent implements OnInit {
  text: any;
  currentLanguage = this.langService.currentLanguage;

  constructor(private langService: LanguageService) {}

  ngOnInit(): void {
    this.text = this.langService.fetchText(this.currentLanguage);
  }

  onSubmit(form: NgForm) {
    if(form.value.loginForm === ''){
    let email = form.value.loginEmail;
    let password = form.value.loginPassword;
    let f = { email, password };
    console.log(f);
    } else {
      let username = form.value.username
      let email = form.value.registerEmail;
      let password = form.value.registerPassword;
      let repPassword = form.value.checkRegisterPassword;
      let f = { email, password, username, repPassword };
      console.log(f);
    }
    console.log(form)
    // form.reset();
  }
}
