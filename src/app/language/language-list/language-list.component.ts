import {Component, Inject, OnInit} from '@angular/core';
import {Language} from "../language";
import {LanguageService} from "../language.service";
import {
  trigger,
  state,
  style,
  animate,
  transition, keyframes
} from '@angular/animations';

@Component({
  selector: 'app-language-list',
  templateUrl: './language-list.component.html',
  styleUrls: ['./language-list.component.css'],
  animations: [
    trigger('openClose', [
      // ...
      state('open', style({
        height: '200px',
        opacity: 1,
        backgroundColor: 'yellow'
      })),
      state('closed', style({
        height: '100px',
        opacity: 0.8,
        backgroundColor: 'blue'
      })),
      transition('open => closed', [
        animate('1s')
      ]),
      transition('closed => open', [
        animate('0.5s')
      ]),
    ]),
  ],
})
export class LanguageListComponent implements OnInit {
  isOpen = true;

  languages:Language[] = [];
  toggle() {
    this.isOpen = !this.isOpen;
  }

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
