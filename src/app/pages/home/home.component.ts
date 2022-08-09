import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private toastr: ToastrService) { }

  ngOnInit(): void {}

  certs = ["cert11.jpg","cert1.png", "cert2.jpg", "cert3.jpg", "cert4.jpg", "cert5.jpg", "cert6.jpg", "cert7.png", "cert8.jpg", "cert9.jpg", "cert10.jpg", "cert12.png", "cert13.jpg", "cert14.png", "cert15.jpg"];

  pros = [
    ["2", "News WebSite", "HTML5, CSS3, JavaScript, Bootstrap4, PHP, MySql", "https://github.com/DhammapalSuradkar-123/Dhammapal_Suradkar_News_Project.github.io", "Completed"],
    ["3", "ATM Application In Python", "Python, Oracle", "https://github.com/DhammapalSuradkar-123/ATM-Application-In-Python", "Completed"],
  ];


  // show message
  showMsg(){
    this.toastr.info("This project is currently under work. When the project will ready I will update this website accordingly.", "Project Under Work");
  }

}
