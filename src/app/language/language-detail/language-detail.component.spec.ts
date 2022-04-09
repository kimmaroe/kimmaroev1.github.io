import {ComponentFixture, TestBed} from '@angular/core/testing';

import { RouterTestingModule } from "@angular/router/testing";
import {LanguageDetailComponent} from './language-detail.component';

describe('LanguageDetailComponent', () => {
  let component: LanguageDetailComponent;
  let fixture: ComponentFixture<LanguageDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ RouterTestingModule],
      declarations: [LanguageDetailComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LanguageDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
