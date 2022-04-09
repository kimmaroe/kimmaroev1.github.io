import {Inject, Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ProjectsAPI} from "./projects-api";

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

  private url:string = 'https://gitconnected.com/v1/portfolio/kimmaroe';
  constructor(@Inject(HttpClient)private http: HttpClient) {}

  getProjects() {
    let projects =  this.http.get<ProjectsAPI>(this.url);
    return projects;
  }
}
