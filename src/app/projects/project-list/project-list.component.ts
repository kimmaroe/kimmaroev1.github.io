import {Component, Inject, OnInit} from '@angular/core';
import {Project} from "../project";
import {ProjectService} from "../project.service";

@Component({
  selector: 'app-projects',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.css']
})
export class ProjectListComponent implements OnInit {
  projects: Project[] = [];
  constructor(@Inject(ProjectService)private projectService: ProjectService) { }

  ngOnInit(): void {
    this.getProjects();
  }

  private getProjects() {
    this.projectService.getProjects().subscribe(result => this.projects = result.projects)
  }
}
