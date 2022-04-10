import {Component, Inject, OnInit} from '@angular/core';
import {Language} from "../language";
import {LanguageService} from "../language.service";

@Component({
  selector: 'app-language-list',
  templateUrl: './language-list.component.html',
  styleUrls: ['./language-list.component.css']
})
export class LanguageListComponent implements OnInit {

  languages:Language[] = [];

  constructor(@Inject(LanguageService)private languageService: LanguageService) {
  }

  ngOnInit(): void {
    this.getLanguages();
  }

  getLanguages() {
       this.languageService.getLanguages()
      .subscribe(languages => {
        this.languages = languages.skills
        console.log(this.languages)
      })
  }
}
