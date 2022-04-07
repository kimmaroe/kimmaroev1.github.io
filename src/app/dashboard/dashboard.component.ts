import {Component, OnInit} from '@angular/core';
import {Language} from '../language';
import {LanguageService} from '../language.service';
import {parseJson} from "@angular/cli/utilities/json-file";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  languages: Language[] = [];

  constructor(private languageService: LanguageService) {
  }

  ngOnInit(): void {
    this.getLanguages();
  }

  getLanguages(): void {
    this.languageService.getLanguages()
      .subscribe(languages => {
        this.languages = languages
      })

  }
}
