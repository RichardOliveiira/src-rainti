import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CreditorMainService {
  
  private _appServerConfig = require('../../../../assets/configs/config-app-server.json')
  
  private _entitiesUrl = "http://"+this._appServerConfig.host+":"+this._appServerConfig.port+"/api/creditor/creditors"
  

  constructor(private http: HttpClient) {  }

  getCreditors(){
    return this.http.get<any>(this._entitiesUrl)
   }

   
}
