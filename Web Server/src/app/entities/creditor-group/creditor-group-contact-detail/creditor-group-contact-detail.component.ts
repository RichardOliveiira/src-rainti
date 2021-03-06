import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { CreditorGroupContactDetailService } from '../creditor-group-services/creditor-group-contact-detail.service';

@Component({
  selector: 'app-creditor-group-contact-detail',
  templateUrl: './creditor-group-contact-detail.component.html',
  styleUrls: ['./creditor-group-contact-detail.component.css']
})
export class CreditorGroupContactDetailComponent implements OnInit {

  userData = {
    name: '',
    dddmodel: '',
    phone: '',
    email: '',
    additionalinfo: '',
  }
  _updatedMessage = ''
  constructor(private _location: Location,
              private _route: ActivatedRoute,
              private _creditorGroupContactDetail: CreditorGroupContactDetailService ) { }

  ngOnInit() {
    this._route.paramMap
    .subscribe(
      params => {
        this._creditorGroupContactDetail.getCreditorGroupContactById(params.get('id'))
        .subscribe(
          res => {
            console.log(res[0])
            this.userData = res[0]
          },
          err => {
            console.log(err)
          }
        )   
    }      
    );
  }

  updateCreditorGroupContactById(){
    this._route.paramMap
    .subscribe(
      params => {
        this._creditorGroupContactDetail.updateCreditorGroupContactById(params.get('id'),this.userData)
        .subscribe(
          res => {
            console.log(res)
            this._updatedMessage = 'Dados de contato alterados com sucesso'
          },
          err => {
            console.log(err)
          }
        )   
    }      
    );
  }

  deleteCreditorGroupContactById(){
    this._route.paramMap
    .subscribe(
      params => {
        this._creditorGroupContactDetail.deleteCreditorGroupContactById(params.get('id'))
        .subscribe(
          res => {
            console.log(res)
            this.backToCreditorGroupContacts()
          },
          err => {
            console.log(err)
          }
        )   
    }      
    );
  }

  backToCreditorGroupContacts(){
    this._location.back()
  }

}