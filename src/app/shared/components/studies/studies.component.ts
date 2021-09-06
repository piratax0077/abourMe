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

  constructor(public apiService: ProjectsService) { }

  ngOnInit(): void {
    $("#go_bottom").click(function() {
      $("html, body").animate({ scrollTop: $(document).height() }, "slow");
    });​
    this.themeColor = this.apiService.getColorTheme();
    this.themeColor$ = this.apiService.getColorTheme$();
    this.themeColor$.subscribe(color => this.themeColor = color);
  }

}
