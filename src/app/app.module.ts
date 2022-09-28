import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {Routes} from '@angular/router';
import {RouterModule} from '@angular/router';
import { ROUTES } from './app.routes';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { SignupComponent } from './signup/signup.component';
import { UserProfilComponent } from './user-profil/user-profil.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    SignupComponent,
    UserProfilComponent,
  ],

  imports: [
    BrowserModule,
    RouterModule.forRoot(ROUTES),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
