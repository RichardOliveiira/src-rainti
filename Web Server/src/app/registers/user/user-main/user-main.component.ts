import { Component, OnInit } from '@angular/core';
import { UserMainService } from '../user-services/user-main.service';



@Component({
  selector: 'app-user-main',
  templateUrl: './user-main.component.html',
  styleUrls: ['./user-main.component.css']
})
export class UserMainComponent implements OnInit {

  user: Array<any> = []
  searchText: ''
  name: ''
  constructor(private _userService: UserMainService) { 
      
    }

  ngOnInit() {
    this._userService.getUser()
    .subscribe(      
      res => this.user = res,
      err => console.log(err)
    ) 
  }
}

