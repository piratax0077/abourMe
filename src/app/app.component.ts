import { Component, OnInit } from '@angular/core';

// Declaramos las variables para jQuery
declare var jQuery:any;
declare var $:any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  
  title = 'aboutMe';

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
