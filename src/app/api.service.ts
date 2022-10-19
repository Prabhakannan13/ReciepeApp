import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }
  viewReciepe=()=>{
    return this.http.get("http://localhost:8080/viewreciepe")
  }
  addReciepe=(data:any)=>{
    return this.http.post("http://localhost:8080/addreciepe",data)
  }
}
