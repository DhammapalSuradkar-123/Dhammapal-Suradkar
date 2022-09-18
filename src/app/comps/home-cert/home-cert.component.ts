import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-home-cert',
  templateUrl: './home-cert.component.html',
  styleUrls: ['./home-cert.component.css']
})
export class HomeCertComponent implements OnInit {

  constructor(private toastr: ToastrService) { }

  ngOnInit(): void {}

  certs = ["cert11.jpg","cert1.png", "cert2.jpg", "cert3.jpg", "cert4.jpg", "cert5.jpg", "cert6.jpg", "cert7.png", "cert8.jpg", "cert9.jpg", "cert10.jpg", "cert12.png", "cert13.jpg", "cert14.png", "cert15.jpg"];

  certifications = [
    ["./assets/web-img/oracle-logo.png", "Oracle Logo", "Oracle Certified Associate, Java SE 8 Programmer - Oracle", "Issued July 2022", "293404002OCAJSE8", "https://catalog-education.oracle.com/pls/certview/sharebadge?id=84E0461EB55B744F473F51FC436B9ED60CDC2B21505A86091CDEDF7C91D8524F", ""],
    ["./assets/web-img/microsoft-logo.png", "Microsoft Logo", "Microsoft Certified Virtual Internship Program - Microsoft", "Issued Augast 2020", "TiYRLSbiHF7kpe3Kr", "https://insidesherpa.s3.amazonaws.com/completion-certificates/Microsoft/ms2CK9b2SCWGXwPMS_Microsoft_ytMfTLZ8TkCDNWS3n_completion_certificate.pdf", ""],
    ["./assets/web-img/IBM-logo.png", "IBM Logo", "Python For Data Science - IBM", "Issued Augast 2020", "d93ccf24ef2a4d10914e3847808a4e1b", "https://www.credly.com/badges/b941b03c-eeb1-403b-a4e3-b6e2537ee84e?source=linked_in_profile", "cert3"]
  ];

  pros = [
    ["2", "News WebSite", "HTML5, CSS3, JavaScript, Bootstrap4, PHP, MySql", "https://github.com/DhammapalSuradkar-123/Dhammapal_Suradkar_News_Project.github.io", "Completed"],
    ["3", "ATM Application In Python", "Python, Oracle", "https://github.com/DhammapalSuradkar-123/ATM-Application-In-Python", "Completed"],
  ];


  // show message
  showMsg(){
    this.toastr.info("This project is currently under work. When the project will ready I will update this website accordingly.", "Project Under Work");
  }

}
