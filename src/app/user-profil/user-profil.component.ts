import { Component, OnInit } from '@angular/core';
import { User } from '../models/user.model';

@Component({
  selector: 'app-user-profil',
  templateUrl: './user-profil.component.html',
  styleUrls: ['./user-profil.component.scss']
})
export class UserProfilComponent implements OnInit {

  user1 = new User('Doe', 'John', 25, '', 'https://randomuser.me/api/portraits/lego/2.jpg', true);

  constructor() { }

  ngOnInit(): void {
  }

}
