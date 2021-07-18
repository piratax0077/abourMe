import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProjectsService } from 'src/app/services/projects.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  title: string;
  src: string;
  project: any;
  id: any;
  url: string;
  images: any;

  constructor(private route: ActivatedRoute, private apiProject: ProjectsService) {

    this.title = "";
    this.src = "";
    this.url = "";

    this.id = this.route.snapshot.paramMap.get('id');
    
    this.project = this.apiProject.getProjectById(this.id);
    
    this.images = this.project.images;
    console.log(this.images);
   }

  ngOnInit(): void {
    
  }

}
