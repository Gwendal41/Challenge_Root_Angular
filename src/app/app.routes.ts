import {Routes} from '@angular/router';
import { SignupComponent } from './signup/signup.component';
import { UserProfilComponent } from './user-profil/user-profil.component';

const ROUTES: Routes = [
    { path: 'signup', component: SignupComponent },
    { path: 'user-profil', component: UserProfilComponent },
    { path: '', component: UserProfilComponent },
  ];
  
  export { ROUTES };