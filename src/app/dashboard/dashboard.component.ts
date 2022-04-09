import {Component, OnInit} from '@angular/core';
import {Language} from '../language/language';
import {LanguageService} from '../language/language.service';
import {parseJson} from "@angular/cli/utilities/json-file";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  languages:any;

  constructor(private languageService: LanguageService) {
  }

  ngOnInit(): void {
    this.getLanguages();
  }

  getLanguages(): void {
    this.languageService.getLanguages()
      .subscribe(result => {
        this.languages = result.skills
      })

  }
}
