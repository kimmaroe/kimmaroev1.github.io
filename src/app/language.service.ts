import {Inject, Injectable} from '@angular/core';

import {HttpClient} from "@angular/common/http";
import {SkillsAPI} from "./skills-api";

@Injectable({
  providedIn: 'root'
})
export class LanguageService {
  private url:string = 'https://gitconnected.com/v1/portfolio/kimmaroe';
  constructor(@Inject(HttpClient)private http: HttpClient) {}

  getLanguages() {
    let languages =  this.http.get<SkillsAPI>(this.url);
    return languages;
  }

}
