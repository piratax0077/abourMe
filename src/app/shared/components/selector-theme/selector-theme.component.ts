import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ProjectsService } from 'src/app/services/projects.service';

@Component({
  selector: 'app-selector-theme',
  templateUrl: './selector-theme.component.html',
  styleUrls: ['./selector-theme.component.css']
})
export class SelectorThemeComponent implements OnInit {

  @Output() themeColor = new EventEmitter<string>();

  constructor(public apiProjects: ProjectsService) { }

  ngOnInit(): void {
  }

  cambiarTema(color: string){
    this.apiProjects.setColorTheme(color);
    this.themeColor.emit(color);
  }

}
