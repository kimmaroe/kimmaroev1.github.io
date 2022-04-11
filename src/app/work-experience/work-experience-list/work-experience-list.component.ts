import {Component, Inject, OnInit} from '@angular/core';
import {WorkExperiencesService} from "../work-experiences.service";
import {Work} from "../work";

@Component({
  selector: 'app-work-experiences',
  templateUrl: './work-experience-list.component.html',
  styleUrls: ['./work-experience-list.component.css']
})
export class WorkExperienceListComponent implements OnInit {
  workExperiences:Work[]=[];

  constructor(@Inject(WorkExperiencesService)private workExperiencesService: WorkExperiencesService) { }

  ngOnInit(): void {
    this.getWorkExperiences();
  }

  private getWorkExperiences() {
    this.workExperiencesService.getWorkExperiences().subscribe(result => {
      this.workExperiences = result.work
    })
  }
}
