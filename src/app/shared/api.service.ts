import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private _http:HttpClient) { }
  // Now here i will define the POST,GET,PUT,DELETE 
  // Create User Using Post Method
  postUser(data:any){
    return this._http.post<any>("http://localhost:3000/posts", data).pipe(map((res:any)=>{
      return res;
    }))
  }

  // Get User Using Get Method
  getUser(){
    return this._http.get<any>("http://localhost:3000/posts").pipe(map((res:any)=>{
      return res;
    }))
  }


  // Update User using PUT method
  updateUser(data:any, name:any){
    return this._http.put<any>("http://localhost:3000/posts/"+name, data).pipe(map((res:any)=>{
      return res;
    }))
  }

  // Delete User using Delete method
  deleteUser(id:number){
    return this._http.delete<any>("http://localhost:3000/posts/"+id).pipe(map((res:any)=>{
      return res;
    }))
  }
}
