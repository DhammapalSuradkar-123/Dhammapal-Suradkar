import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { NavbarComponent } from './comps/navbar/navbar.component';
import { FooterComponent } from './comps/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { ContactComponent } from './pages/contact/contact.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import { GalleryComponent } from './pages/gallery/gallery.component';
import { ProfessionComponent } from './pages/profession/profession.component';
import { MatCardModule } from '@angular/material/card';
import { HomeCertComponent } from './comps/home-cert/home-cert.component';
import { RouterModule, Routes } from '@angular/router';
import { NgxUiLoaderModule, NgxUiLoaderConfig, SPINNER } from 'ngx-ui-loader';
import {MatDividerModule} from '@angular/material/divider';

const ngxUiLoaderConfig:NgxUiLoaderConfig = {
  fgsType: SPINNER.squareJellyBox,
  fgsSize: 145,
  fgsColor: "#00ff00",
  pbColor: "#00ff00",
  text: "Please Wait...",
  textColor: "#00ff00"
}

const routes: Routes = []

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    ContactComponent,
    GalleryComponent,
    ProfessionComponent,
    HomeCertComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatButtonModule,
    MatToolbarModule,
    FormsModule,
    ReactiveFormsModule,
    ToastrModule.forRoot({
      positionClass: "toast-bottom-center",
      preventDuplicates: true,
      timeOut: 6000,
      closeButton: true
    }),
    MatCardModule,
    RouterModule.forRoot(routes, {useHash: true}),
    NgxUiLoaderModule.forRoot(ngxUiLoaderConfig),
    MatDividerModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
