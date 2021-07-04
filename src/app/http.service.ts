import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MultyTranslater } from './translater/multy-translater';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  constructor(private http: HttpClient) {}

  postData(req: MultyTranslater){
    const body = { key: req.key, value: req.value}
    return this.http.post('http://localhost:3000/', body)
  }
}
