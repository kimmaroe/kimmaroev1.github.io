import {Component, Input, OnInit} from '@angular/core';
import {Language} from "../language";
import {ActivatedRoute} from '@angular/router';
import {Location} from '@angular/common';
import {LanguageService} from "../language.service";

@Component({
  selector: 'app-language-detail',
  templateUrl: './language-detail.component.html',
  styleUrls: ['./language-detail.component.css']
})
export class LanguageDetailComponent implements OnInit {

  @Input() language?: Language;

  constructor(
    private route: ActivatedRoute,
    private languageService: LanguageService,
    private location: Location
  ) {
  }

  ngOnInit(): void {
    this.getLanguage();
  }

  private getLanguage() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.languageService.getLanguage(id).subscribe(language => this.language = language);
  }

  goBack(): void {
    this.location.back();
  }
}
