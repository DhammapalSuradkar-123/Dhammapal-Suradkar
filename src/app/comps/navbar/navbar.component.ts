import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor() {}

  ngOnInit() {}

  // header animation
  header_var: any;
  @HostListener("document:scroll")
  scrollFun(){
    if(document.body.scrollTop > 0 || document.documentElement.scrollTop > 0){
      this.header_var = true;
    }else{
      this.header_var = false;
    }
  }

}
