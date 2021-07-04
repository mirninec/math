import { Component, OnDestroy, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';
import { HttpService } from '../http.service';
import { MultyTranslater } from './multy-translater';

@Component({
  selector: 'app-traslater',
  templateUrl: './translater.component.html',
  styleUrls: ['./translater.component.css'],
})
export class TranslaterComponent implements OnInit, OnDestroy {
  translated!: { en: '', fr: '', de: '', sp: '', pr: '', it: ''}

  constructor(private httpService: HttpService) {}

  ngOnInit(): void {
   this.translated = { en: '', fr: '', de: '', sp: '', pr: '', it: ''}
  }

  onSubmit(form: NgForm) {
    const send: MultyTranslater = new MultyTranslater(form.value.key, form.value.value);
    this.httpService.postData(send).subscribe((data: any) => {
      console.log(data)
      this.translated['en'] = data.result.resultEn;
      this.translated['fr'] = data.result.resultFr;
      // this.translated.de = data.result.resultDe;
      // this.translated.sp = data.result.resultEs;
      // this.translated.pr = data.result.resultPt;
      // this.translated.it = data.result.resultIt;
    });
  }

  ngOnDestroy() {
  }
}
