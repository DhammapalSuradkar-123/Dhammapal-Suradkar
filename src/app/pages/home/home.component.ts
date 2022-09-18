import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { NgxUiLoaderService } from 'ngx-ui-loader';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private loader: NgxUiLoaderService) { }

  ngOnInit(): void {
    this.loader.start(); 
    setTimeout(() => {
      this.loader.stop();
    }, 1000);
  }

}
