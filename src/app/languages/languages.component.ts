import {Component, OnInit} from '@angular/core';
import {Language} from "../language";
import {LanguageService} from "../language.service";

@Component({
  selector: 'app-languages',
  templateUrl: './languages.component.html',
  styleUrls: ['./languages.component.css']
})
export class LanguagesComponent implements OnInit {

  languages: any = [];

  constructor(private languageService: LanguageService) {
  }

  ngOnInit(): void {
    this.getLanguages();
  }

  getLanguages() {
       this.languageService.getLanguages()
      .subscribe(languages => {
        this.languages = languages
      })
  }
}
