import { Component, OnInit } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-studies',
  templateUrl: './studies.component.html',
  styleUrls: ['./studies.component.css']
})
export class StudiesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    $("#go_bottom").click(function() {
      $("html, body").animate({ scrollTop: $(document).height() }, "slow");
    
    });​
  }

}
