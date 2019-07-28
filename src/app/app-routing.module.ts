import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { ImageBannerComponent } from './components/image-banner/image-banner.component';
import { CreateAccountComponent } from './components/create-account/create-account.component';
import {UserProfileComponent} from './components/user-profile/user-profile.component';
import { LibraryComponent } from './library/library.component';
import { PlaylistComponent } from './playlist/playlist.component';
import { ForgetComponent } from './components/forget/forget.component';

export const routes: Routes = [
    {path: '', redirectTo: '/home', pathMatch: 'full'},
    {path: 'home', component: HomeComponent},
    {path: 'login', component: LoginComponent},
    {path: 'banner', component: ImageBannerComponent},
    {path: 'create-account', component: CreateAccountComponent},
    {path: 'user-profile', component: UserProfileComponent},
    {path: 'library', component: LibraryComponent},
    {path: 'playlist', component: PlaylistComponent},
    {path: 'forget', component: ForgetComponent}
];

@NgModule({
    imports: [ RouterModule.forRoot(routes)],
    exports: [ RouterModule ]
})
export class AppRoutingModule {}
