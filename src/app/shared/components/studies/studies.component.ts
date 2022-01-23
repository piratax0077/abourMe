import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ProjectsService } from 'src/app/services/projects.service';
declare var $: any;

@Component({
  selector: 'app-studies',
  templateUrl: './studies.component.html',
  styleUrls: ['./studies.component.css']
})
export class StudiesComponent implements OnInit {

  themeColor: string = '';
  themeColor$!: Observable<string>;

  urlImage_1 :string = 'https://franciscorojoweb.netlify.app/assets/img/certificado-javascript.jpg';
  urlImage_2: string = 'https://franciscorojoweb.netlify.app/assets/img/certificado-master-php.jpg';
  constructor(public apiService: ProjectsService) { }

  ngOnInit(): void {
    $("#go_bottom").click(function() {
      $("html, body").animate({ scrollTop: $(document).height() }, "slow");
    });​
    this.themeColor = this.apiService.getColorTheme();
    this.themeColor$ = this.apiService.getColorTheme$();
    this.themeColor$.subscribe(color => this.themeColor = color);
  }

  verImagen(){
    console.log('object')
  }
}
