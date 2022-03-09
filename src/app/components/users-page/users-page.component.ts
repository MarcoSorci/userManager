import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/model/user';
import { ConnectionService } from 'src/app/services/connection.service';

@Component({
  selector: 'app-users-page',
  templateUrl: './users-page.component.html',
  styleUrls: ['./users-page.component.scss'],
})
export class UsersPageComponent implements OnInit {
  users?: User[]; //to fix users not being defined put the ?, or set = []

  constructor(private conServ: ConnectionService) {}

  ngOnInit(): void {
    // this.conServ.fetchUsers()
    // .then(resp => resp.json()
    // .then(jsonArray => this.users = jsonArray))
    this.conServ.getUsers().subscribe((jsonArray) => (this.users = jsonArray));
  }
}
