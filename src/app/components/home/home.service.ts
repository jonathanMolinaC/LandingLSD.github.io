import {Injectable, Optional} from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
    providedIn:'root',
})

export class HomeService {
  clientid: string=btoa("13107394-cac0-40e6-9bf0-ae3099cae4c6");
  client_secret: string=btoa("B8XS5fGoS-VqzlDc3AOTXFa6lUzPj6Fu_D6A_DtHZAsW0MvR0gAveuHpG_qJAJylMQ8QpKT6yheNTA3_yz68-g");
  url: string = 'https://oauth.brightcove.com/v3/access_token';

  constructor(private http: HttpClient){}
 

  public getToken(){
   let reponse=this.http.post(this.url,{grant_type: "client_credentials"},{headers:new HttpHeaders({
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Credentials": "true",
    "Access-Control-Allow-Methods": "GET,HEAD,OPTIONS,POST,PUT",
    "Access-Control-Allow-Headers": "Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers",
     'Content-Type' : 'application/x-www-form-urlencoded; charset=UTF-8',
     "Authorization":"Base "+this.clientid+":"+this.client_secret})}).subscribe((data)=>{
    console.log(data);
   });
    
    
  }
 
}
