import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ProjectsService } from 'src/app/services/projects.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnChanges {

  themeColor: string = '';

  constructor(public apiProjects: ProjectsService) { 
    
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
  }

  ngOnInit(): void {
    this.themeColor = this.apiProjects.getColorTheme();
  }

}
