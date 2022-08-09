import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor(private toastr: ToastrService) { }

  ngOnInit(): void {}

  data={
    name: "",
    message: ""
  }

  // toggle tab button and tab section
  stayActive(str: any){
    const length = document.querySelectorAll<HTMLLIElement>("h3").length;
    const ele = document.querySelectorAll<HTMLElement>("h3");
    const tab = document.getElementsByClassName(str)[0];
    const sec2 = document.getElementsByClassName("sec2")[0] as HTMLElement;
    const sec3 = document.getElementsByClassName("sec3")[0] as HTMLElement;

    for(let i=0; i<length; i++){
      ele[i].classList.remove("active");
    }
    
    tab?.classList.toggle("active");

    if(str == "tab2"){
      sec3.style.display = "block";
      sec2.style.display = "none";
    }else{
      sec2.style.display = "block";
      sec3.style.display = "none";
    }
  }

  // message form validations
  messageSubmit(){
    if(this.data.name.trim() == "" || this.data.name == null){
      this.toastr.warning("Enter Your Name", "Name is missing");
    }else if(this.data.message.trim() == "" || this.data.message == null){
      this.toastr.warning("Enter Your Message","Message is missing");
    }else{
      this.toastr.info("Hello "+this.data.name+", Your message has not been forwarded to Dhammapal Suradkar. Note: this section is currently in an under-construction state.", "Under-Construction Status");
    }
  }

}
