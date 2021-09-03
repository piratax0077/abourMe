import { Component, Input, OnInit } from '@angular/core';
import { RouterLinkActive } from '@angular/router';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Input() themeColor: any;

  constructor() { }

  ngOnInit(): void {
  }

}
