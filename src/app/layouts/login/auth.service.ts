import { HttpClient} from '@angular/common/http'
import { Injectable } from '@angular/core';
import { environment } from '@env/environment';
import { BehaviorSubject, Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators'
import { Token } from '@angular/compiler/src/ml_parser/lexer';
import {JwtHelperService} from '@auth0/angular-jwt'
import { Router } from '@angular/router';
import { LoginModel } from 'src/app/shared/models/loginModel';

const helper = new JwtHelperService();

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private loggedIn = new BehaviorSubject<boolean>(false);

  constructor(private http:HttpClient, private router:Router) {
    this.checkToken();
   }
  
  get isLogged():Observable<boolean>{
    return this.loggedIn.asObservable();
  }

  login(authData:LoginModel):Observable<any | void>{
    return this.http
    .post<any>(`${environment.API_URL}${environment.ApiLogin}`, authData)
    .pipe(
      
      map((res:any) => {
        this.saveToken(authData.Usuario);
        this.loggedIn.next(true);
        return res;
      }),
      catchError((err) => this.handleError(err))
    )
  }

  logout():void{
    debugger;
    localStorage.removeItem('token');
    this.loggedIn.next(false);
    this.router.navigate(['./login']); 
  }

  private checkToken():void{
    const userToken = localStorage.getItem('token');
    if(userToken){
      this.loggedIn.next(true);
    }else{
      this.logout();
    }
    /* const isExpired = helper.isTokenExpired(userToken);
    console.log('isExpired->', isExpired);

    if(isExpired){
      this.logout();
    }else{
      this.loggedIn.next(true);
    } */
  }

  private saveToken(token:string):void{
    localStorage.setItem('token', token);
  }
  private handleError(err):Observable<never>{
    let errorMessage = 'An error ocurred retrieving data';
    if(err){
      errorMessage = `Error: code ${err.message}`;
    }   
    window.alert(errorMessage);
    return throwError(errorMessage);
  }

}
