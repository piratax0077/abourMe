import { Component, OnInit } from '@angular/core';
import { projects } from 'src/app/data/const/projects.const';
import { ProjectsService } from 'src/app/services/projects.service';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit {

  projects: any[];
  themeColor: string='';

  constructor(public apiProjects: ProjectsService) { 
    this.projects = this.apiProjects.getProjects();
   
  }

  ngOnInit(): void {
    this.themeColor = this.apiProjects.getColorTheme();
  }

}
