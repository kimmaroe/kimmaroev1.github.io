import {Component, Inject, OnInit} from '@angular/core';
import {ProjectService} from "../project.service";
import {ProjectPreview} from "../project-preview";
import {Project} from "../project";

@Component({
  selector: 'app-project-preview',
  templateUrl: './project-preview.component.html',
  styleUrls: ['./project-preview.component.css']
})
export class ProjectPreviewComponent implements OnInit {

  projects: Project[] = [];
  constructor(@Inject(ProjectService)private projectService: ProjectService) { }

  ngOnInit(): void {
    this.getProjectsPreviews();
  }

  private getProjectsPreviews() {
    this.projectService.getProjects().subscribe(result => {
          this.projects = result.projects
        }
      )
  }
}
