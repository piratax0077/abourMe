import { Component, Input, OnInit } from '@angular/core';
// Declaramos las variables para jQuery
declare var jQuery:any;
declare var $:any;

@Component({
  selector: 'app-scroll-to-top',
  templateUrl: './scroll-to-top.component.html',
  styleUrls: ['./scroll-to-top.component.css']
})
export class ScrollToTopComponent implements OnInit {

  @Input() themeColor: any;

  constructor() { }

  ngOnInit(): void {
    $(window).scroll(()=>{
      if($(this).scrollTop() > 100 ){
        $('a').fadeOut();
      }else{
        $('a').fadeIn();
      }
    })
    $('a').click(()=>{
      $("html, body").animate({ scrollTop: 0 }, 600); 
        return false; 
    })
  }


}
