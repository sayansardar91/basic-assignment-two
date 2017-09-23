import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  validUsername = false;
  username = "";
  userstatus = "";

  constructor() {
  }

  ngOnInit() {
  }

  onCreateUser(){
      this.userstatus = "New user created. Named: "+this.username;
  }

  resetUser(){
    this.username = "";
    this.userstatus = "";
    this.validUsername = false;
  }

  validateUsername(event: Event){
    if((<HTMLInputElement>event.target).value.length > 3){
        this.validUsername = true;
    }else{
      this.validUsername = false;
    }
  }

}
