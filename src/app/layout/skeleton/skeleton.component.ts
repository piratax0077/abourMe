import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skeleton',
  templateUrl: './skeleton.component.html',
  styleUrls: ['./skeleton.component.css']
})
export class SkeletonComponent implements OnInit {

  themeColor: any;

  constructor() { }

  ngOnInit(): void {
  }

  cambiarTema(event: any){
    this.themeColor = event;
  }

}
