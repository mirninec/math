import { Component, OnDestroy, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpService } from '../services/http.service';
import { MultyTranslater } from './multy-translater';
import { text_ru } from '../languages/russian';

@Component({
  selector: 'app-traslater',
  templateUrl: './translater.component.html',
  styleUrls: ['./translater.component.css'],
})
export class TranslaterComponent implements OnInit, OnDestroy {
  currentValue: {key: string, value: string}[] = []

  constructor(private httpService: HttpService) {}

  ngOnInit(): void {
    const arrayKey = Object.keys(text_ru);
    for(let i = 0; i < arrayKey.length; i++){
      let key: string = arrayKey[i];
      let value: string = (text_ru as any)[key]
      this.currentValue.push({key, value})
    }
  }

  onSubmit(form: NgForm) {
    const send: MultyTranslater = new MultyTranslater(form.value.key, form.value.value);
    this.httpService.postData(send).subscribe((data: any) => {
      console.log(data)
    });
  }

  ngOnDestroy() {
  }
}
