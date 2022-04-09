import {Component, Inject, OnInit} from '@angular/core';
import {WorkExperiencesService} from "../work-experiences.service";
import {Work} from "../work";

@Component({
  selector: 'app-work-experiences',
  templateUrl: './work-experiences.component.html',
  styleUrls: ['./work-experiences.component.css']
})
export class WorkExperiencesComponent implements OnInit {
  workExperiences:Work[]=[];

  constructor(@Inject(WorkExperiencesService)private workExperiencesService: WorkExperiencesService) { }

  ngOnInit(): void {
    this.getWorkExperiences();
  }

  private getWorkExperiences() {
    this.workExperiencesService.getWorkExperiences().subscribe(result => {
      this.workExperiences = result.work
      console.log(this.workExperiences)
    })
  }
}
