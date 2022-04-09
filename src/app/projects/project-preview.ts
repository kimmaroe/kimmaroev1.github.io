import {Thumbnailizable} from "../share/thumbnailizable";
import {Project} from "./project";

export class ProjectPreview implements Thumbnailizable{

  private _name:string;
  private _thumbnails: String[] = [];

  constructor(project:Project) {
    this._name = project.name;
    this._thumbnails = this.getThumbnails(project);
  }

  get name(): string {
    return this._name;
  }

  set name(value: string) {
    this._name = value;
  }

  get thumbnails(): String[] {
    return this._thumbnails;
  }

  set thumbnails(value: String[]) {
    this._thumbnails = value;
  }

  getThumbnails(project:Project): String[] {
    let thumbnails:String[] = [];
    project.images.forEach(element => {
      thumbnails.push(element.resolutions.thumbnail.url)
    })
    return thumbnails;
  }
}
