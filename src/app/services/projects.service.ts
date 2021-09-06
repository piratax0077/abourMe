import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { projects } from '../data/const/projects.const';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

  projects: any[] = [];
  project: any;
  colorTheme: string = 'blue';
  private color$ = new Subject<any>();

  constructor() { 
    this.projects = projects;
  }

  getProjects(){
    return this.projects;
  }

  getProjectById(id: any){
   return this.projects.find(p => p.id === id);
  }

  setColorTheme(color: string){
    this.colorTheme = color;
    this.color$.next(this.colorTheme);
  }

  getColorTheme(){
    return this.colorTheme;
  }

  getColorTheme$(): Observable<string>{
    return this.color$.asObservable();
  }
}
