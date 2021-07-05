import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { LanguageService } from '../services/language.service';
import { PassMatchValidator } from '../services/pass-match.validator';

@Component({
  selector: 'app-enter',
  templateUrl: './enter.component.html',
  styleUrls: ['./enter.component.css'],
})
export class EnterComponent implements OnInit {
  text: any;
  currentLanguage = this.langService.currentLanguage;
  formEnter!: FormGroup;
  formRegister!: FormGroup;

  constructor(private langService: LanguageService) {}

  ngOnInit(): void {
    this.text = this.langService.fetchText(this.currentLanguage);
    this.formEnter = new FormGroup({
      email: new FormControl(null, [Validators.email, Validators.required]),
      password: new FormControl(null, [
        Validators.required,
        Validators.minLength(6),
      ]),
      hidden: new FormControl('loginForm'),
    });
    this.formRegister = new FormGroup({
      username: new FormControl(null, [Validators.required]),
      email: new FormControl(null, [Validators.email, Validators.required]),
      password: new FormControl(null, [
        Validators.required,
        Validators.minLength(6),
      ]),
      repeatPassword: new FormControl(null, [
        Validators.required,
        PassMatchValidator(),
      ]),
      hidden: new FormControl('registerForm'),
    });
  }

  showPassword(id: string, event: Event){
    const input = document.getElementById(id) as HTMLInputElement
    if(input.type === 'password'){
      input.type = "text";
    } else {
      input.type = 'password';
    }
    (event.target as HTMLDivElement).classList.toggle('hidePassword');
    (event.target as HTMLDivElement).classList.toggle('showPassword');
  }

  onSubmitEnter() {
    console.log(this.formEnter.value);
    this.formEnter.reset();
  }

  onSubmitRegister() {
    console.log(this.formRegister.value);
    this.formRegister.reset();
  }
}

