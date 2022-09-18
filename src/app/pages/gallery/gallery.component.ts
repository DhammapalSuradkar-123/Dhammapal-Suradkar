import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { NgxUiLoaderService } from 'ngx-ui-loader';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {

  myImgs=[
    ["img1.jpg", "img21.jpg", "img30.jpg", "img8.jpg", "img20.jpg"],
    ["img24.jpg", "img4.jpg", "img5.jpg", "img19.jpg"],
    ["img7.jpg", "img10.jpg", "img22.jpg"],
    ["img3.jpg", "img27.jpg", "img6.jpg"],
    ["img14.jpg", "img29.jpg", "img9.jpg"],
    ["img13.jpg", "img18.jpg", "img23.jpg"]
  ];

  faImgs=[
    ["fimg7.jpg", "fimg2.jpg", "fimg6.jpg"],
    ["fimg4.jpg", "fimg5.jpg"],
    ["fimg3.jpg", "fimg1.jpg"]
  ];

  AccessCode = "";

  constructor(private toastr: ToastrService, private loader: NgxUiLoaderService) { }

  ngOnInit(): void {
    this.loader.start(); 
    setTimeout(() => {
      this.loader.stop();
    }, 2000);
  }

  // show part2
  showPart2(){
    const part2 = document.querySelector(".part2");
    part2?.classList.toggle("show-part2");
  }

  // check access code
  checkCode(){

    if(this.AccessCode.trim() == "" || this.AccessCode == null){
      this.toastr.warning("Enter access code to access the gallery.", "Access Code Is Missing");
    }else{
      if(this.AccessCode == "$Dhamma_1999"){
        const ele1 = document.querySelector("#gallery") as HTMLElement;
        const ele2 = document.querySelector("#check") as HTMLElement;

        ele1.style.display = "block";
        ele2.style.display = "none";
      }else{
        this.toastr.error("Please Enter The Correct Access Code", "Invalid Access Code");
      }
    }

  }

  // show image
  showPic($event: any){
    const src = $event.path[0].currentSrc;
    const img = document.querySelector("#pic-set") as HTMLElement;
    const ele1 = document.querySelector("#gallery") as HTMLElement;
    const ele2 = document.querySelector(".pic") as HTMLElement;

    img.setAttribute("src", src);
    ele1.style.display = "none";
    ele2?.classList.add("show-pic");

  }

  // hide image
  hidePic(){
    const ele1 = document.querySelector("#gallery") as HTMLElement;
    const ele2 = document.querySelector(".pic") as HTMLElement;

    ele1.style.display = "block";
    ele2?.classList.remove("show-pic");
  }

}
