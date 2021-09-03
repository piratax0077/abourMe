import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MessageServiceService } from 'src/app/services/message-service.service';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-contact-me',
  templateUrl: './contact-me.component.html',
  styleUrls: ['./contact-me.component.css']
})
export class ContactMeComponent implements OnInit {

  frmContactMe: FormGroup;
  @ViewChild('closeLoading') close!: ElementRef;

  constructor(public fb: FormBuilder, public api: MessageServiceService) { 
    this.frmContactMe = this.fb.group({
      nombre:['',Validators.required],
      email:['',Validators.email],
      comentario:['',[Validators.required, Validators.minLength(30)]]
    })
  }

  ngOnInit(): void {
  }

  get form(){
    return this.frmContactMe.controls;
  }

  sendEmail(){
      
      this.api.sendMessage(this.frmContactMe.value).subscribe((data)=>{
        if(data){
          this.close.nativeElement.click();
          Swal.fire(data.mensaje);
          this.frmContactMe.reset();
        }
        
    });
  }

}
