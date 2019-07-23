import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ImageBannerComponent } from './components/image-banner/image-banner.component';
import { FooterComponent } from './components/footer/footer.component';
import { LoginViewComponent } from './views/login-view/login-view.component';
import { AppRoutingModule } from './app-routing.module';
import { AuthService } from './services/auth.service';


import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { CreateAccountComponent } from './components/create-account/create-account.component';
import { UserProfileComponent } from './components/user-profile/user-profile.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ImageBannerComponent,
    FooterComponent,
    LoginComponent,
    HomeComponent,
    CreateAccountComponent,
    UserProfileComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
