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

  constructor(private httpService: HttpService) {}

  ngOnInit(): void {

  }

  onSubmit(form: NgForm) {
    const send: MultyTranslater = new MultyTranslater(form.value.key, form.value.value);
    this.httpService.postData(send).subscribe((data: any) => {
      console.log(data);
    });
  }

  ngOnDestroy() {
  }
}
