import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServRoutParamsService {
 url:string= "https://jsonplaceholder.typicode.com/users";
  constructor(private http:HttpClient) {}
  servuserdata(){
     return this.http.get(this.url);
  }

  userdatarout(id){
  return this.http.get("https://jsonplaceholder.typicode.com/users/"+id)
  }
}
