import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AngularFireModule } from 'angularfire2';
import { AppComponent } from './app.component';
import { AngularFireService } from './providers/angular-fire.service';
import { LoginPageComponent } from './login-page/login-page.component';
import { HomePageComponent } from './home-page/home-page.component';
import { RouterModule, Routes } from '@angular/router';

export const firebaseConfig = {
  apiKey: 'AIzaSyBC_uPT2d5DcXsSPHd0iRMwBcrzTJ2zCgU',
  authDomain: 'sunaproject-ef312.firebaseapp.com',
  databaseURL: 'https://sunaproject-ef312.firebaseio.com',
  storageBucket: '',
  messagingSenderId: '457893648666'
};

const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'login', component: LoginPageComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    HomePageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(firebaseConfig),
    RouterModule.forRoot(routes)
  ],
  providers: [AngularFireService],
  bootstrap: [AppComponent]
})
export class AppModule { }
