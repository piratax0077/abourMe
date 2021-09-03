import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-selector-theme',
  templateUrl: './selector-theme.component.html',
  styleUrls: ['./selector-theme.component.css']
})
export class SelectorThemeComponent implements OnInit {

  @Output() themeColor = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  cambiarTema(color: string){
    this.themeColor.emit(color);
  }

}
