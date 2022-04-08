import {Component, Inject, Input, OnInit} from '@angular/core';
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
    @Inject(ActivatedRoute)private route: ActivatedRoute,
    @Inject(LanguageService)private languageService: LanguageService,
    @Inject(Location)private location: Location
  ) {
  }

  ngOnInit(): void {
    this.getLanguage();
  }

  private getLanguage() {
    const name = String(this.route.snapshot.paramMap.get('name'));
    this.languageService.getLanguages()
      .subscribe(result => this.language = result.skills.find(l => l.name === name));
  }

  goBack(): void {
    this.location.back();
  }
}
