import {Inject, Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {WorkExperiencesAPI} from "./work-experiences-api";

@Injectable({
  providedIn: 'root'
})
export class WorkExperiencesService {

  private url:string = 'https://gitconnected.com/v1/portfolio/kimmaroe';
  constructor(@Inject(HttpClient)private http: HttpClient) {}

  getWorkExperiences() {
    let workEwperiences =  this.http.get<WorkExperiencesAPI>(this.url);
    return workEwperiences;
  }
}
