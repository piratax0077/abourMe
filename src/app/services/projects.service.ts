import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { projects } from '../data/const/projects.const';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

  projects: any[] = [];
  project: any;

  constructor() { 
    this.projects = projects;
  }

  getProjects(){
    return this.projects;
  }

  getProjectById(id: any){
   return this.projects.find(p => p.id === id);
  }
}
