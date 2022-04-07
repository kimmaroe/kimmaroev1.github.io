import {Injectable} from '@angular/core';
import {Language} from "./language";
import {LANGUAGES} from "./mock-languages";
import {Observable, of} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class LanguageService {
  constructor() {}

  getLanguages(): Observable<Language[]> {

    let languages =  LANGUAGES;
    return of(languages);
  }

  getLanguage(id: number): Observable<Language> {
    const language = LANGUAGES.find(l => l.id === id)!;
    return of(language);
  }
}
