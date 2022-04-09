import {Component, Inject, OnInit} from '@angular/core';
import {Project} from "../project";
import {ProjectsService} from "../projects.service";

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  projects: Project[] = [];
  constructor(@Inject(ProjectsService)private projectService: ProjectsService) { }

  ngOnInit(): void {
    this.getProjects();
  }

  private getProjects() {
    this.projectService.getProjects().subscribe(result => this.projects = result.projects)
  }
}
