import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Data } from '@angular/router';
import { text_ru } from '../languages/russian';
import { LanguageService } from '../services/language.service';


@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.css'],
})
export class NotFoundComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private langService: LanguageService
  ) {}
  path;
  errorMessage = 'error';
  text;
  currentLanguage = this.langService.currentLanguage;

  ngOnInit(): void {
    this.text = this.langService.fetchText(this.currentLanguage);
    // this.errorMessage = this.route.snapshot.data['message']
    this.route.data.subscribe((data: Data) => {
      this.errorMessage = data['message'];
    });

    let fragment = '';

    let url = this.route.snapshot.url.toString().replace(/,/g, '/');

    console.log(this.route.snapshot.queryParams);

    console.log(Object.values(this.route.snapshot.queryParams).length);

    if (Object.values(this.route.snapshot.queryParams).length !== 0) {
      url += '?';
      for (let param in this.route.snapshot.queryParams) {
        url += param + '=' + this.route.snapshot.queryParams[param] + '&';
      }
    }

    if (this.route.snapshot.fragment) {
      fragment = '#' + this.route.snapshot.fragment;
    }

    this.path = url.replace(/&$/, '') + fragment;
  }
}
