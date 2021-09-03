import { Component, OnInit } from '@angular/core';
// Declaramos las variables para jQuery
declare var jQuery:any;
declare var $:any;

@Component({
  selector: 'app-go-top',
  templateUrl: './go-top.component.html',
  styleUrls: ['./go-top.component.css']
})
export class GoTopComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    $(window).scroll(()=>{
      if($(this).scrollTop() > 100 ){
        $('#button').fadeOut();
      }else{
        $('#button').fadeIn();
      }
    })
    $('#button').click(()=>{
      $("html, body").animate({ scrollTop: 0 }, 600); 
        return false; 
    })
  }

}
