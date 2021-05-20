import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { MaincontentComponent } from './components/maincontent/maincontent.component';
import { FooterComponent } from './components/footer/footer.component';
import { ComentsComponent } from './components/coments/coments.component';
import { NewsComponent } from './components/news/news.component';

import {RouterModule, Routes} from '@angular/router';
import { AboutusComponent } from './components/aboutus/aboutus.component';
import { DaysPipe } from './components/pipes/days.pipe';
import { ViewmovieComponent } from './components/viewmovie/viewmovie.component';
import { LoginComponent } from './components/registration/login/login.component';
import { RegisterComponent } from './components/registration/register/register.component';
import { RestoreaccountComponent } from './components/registration/restoreaccount/restoreaccount.component';
import { LikesComponent } from './components/likes/likes.component';
import {HttpClientModule} from '@angular/common/http';
import {AnimeService} from './services/out/anime.service';

import {ShareService} from './services/share.service';
import {RegisterGuard} from './guards/register.guard';
import {ExitLoginGuard} from './guards/exit-login.guard';

import {FormsModule, ReactiveFormsModule} from '@angular/forms';
const appRoutes: Routes = [
  {path: '', component: MaincontentComponent},
  {path: 'home', component: MaincontentComponent},
  {path: 'news', component: NewsComponent},
  {path: 'viewmovie/:id', component: ViewmovieComponent, canDeactivate: [ExitLoginGuard]},
  {path: 'login', component: LoginComponent, canDeactivate: [ExitLoginGuard]},
  {path: 'reg', component: RegisterComponent, canDeactivate: [ExitLoginGuard]},
  {path: 'restore', component: RestoreaccountComponent, canDeactivate: [ExitLoginGuard]},
  {path: 'aboutus', component: AboutusComponent},
];
//{path: 'reg', component: RegisterComponent, canActivate: [RegisterGuard]},

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    MaincontentComponent,
    FooterComponent,
    ComentsComponent,
    NewsComponent,
    AboutusComponent,
    DaysPipe,
    ViewmovieComponent,
    LoginComponent,
    RegisterComponent,
    RestoreaccountComponent,
    LikesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
    FormsModule,
  ],
  providers: [ShareService, RegisterGuard, ExitLoginGuard, AnimeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
