import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import {AuthService} from 'src/app/layouts/login/auth.service'
import Swal from 'sweetalert2';
import { LoginModel } from 'src/app/shared/models/loginModel';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent {
  
  constructor(private authSvc: AuthService, private router:Router, private fb: FormBuilder) {}
  datosLogin:LoginModel;

  ngOnInit(): void {
    this.datosLogin = new LoginModel();
    this.datosLogin.Contrasena = '';
    this.datosLogin.Usuario = '';
    this.checkToken();
  }

  private checkToken():void{
    const userToken = localStorage.getItem('token');
    /* const isExpired = helper.isTokenExpired(userToken); */
    if(userToken){
      this.router.navigate(['/fw-sinergia']); 
    }
  }

  onLogin(dataLogin){
    var respuesta; 
    var envioLogin = dataLogin;  
    debugger;
    envioLogin.Usuario = envioLogin.Usuario.toUpperCase();
    debugger;
    if(envioLogin.Usuario == 'WAVELLA' && envioLogin.Contrasena == '1234567'){
      this.router.navigate(['/fw-sinergia']); 
    }else{
      this.error();
      this.datosLogin.Contrasena = '';
      this.datosLogin.Usuario = '';
    }

    
    /* this.authSvc.login(envioLogin).subscribe(res => {
      if(res){
        respuesta = res;        
        if(respuesta.CODLOGGUEO == 1){
          this.router.navigate(['/fw-sinergia']); 
        }else{
          this.error(respuesta);
          this.datosLogin.Contraseña = '';
          this.datosLogin.Usuario = '';
        }
      }
    }); */

  }

  error() {
    /*this._snackBar.open('Autentificación de usuario fallidas', '',{
      horizontalPosition: 'center',
      verticalPosition: 'bottom'
    })*/
    Swal.fire({title: /* mensaje.MESSAGEAPI */'Autentificación de usuario fallida', confirmButtonColor: '#d52b1e', confirmButtonText: 'Salir'});

    Swal.update({
      icon: 'error'
    })
  }

  /* Validavion contraseña y usuario vacios */
  isVisiblePwd = false;
  isVisibleUser = false;

  vacioUser(){

  }
  vacioPwd(){

  }

  /* Final Validacion vacios usuarios */

  Alphanumeric(evt) {
    evt = (evt) ? evt : window.event;    
    var charCode = (evt.which) ? evt.which : evt.keyCode;
    if ((charCode == 32) || (charCode >= 48 && charCode <= 57) || (charCode == 95) || (charCode >= 97 && charCode <= 122) || (charCode >= 65 && charCode <= 90) || (charCode == 8))        
        return true;
    else
        return this.errorletter('Caracter no admitido por favor verifique'), false;
  }

  AlphanumericPwd(evt) {
    evt = (evt) ? evt : window.event;    
    var charCode = (evt.which) ? evt.which : evt.keyCode;
    if ((charCode == 32) || (charCode == 33) || (charCode >= 35 && charCode <= 36) || (charCode == 38) || (charCode >= 40 && charCode <= 59) || (charCode == 61) || (charCode >= 63 && charCode <= 93) || (charCode >= 95 && charCode <= 125))        
        return true;
    else
        return this.errorletter('Caracter no admitido por favor verifique'), false;
  }

  errorletter(mensaje:any) {
    /*this._snackBar.open('Autentificación de usuario fallidas', '',{
      horizontalPosition: 'center',
      verticalPosition: 'bottom'
    })*/
    Swal.fire({title: mensaje, confirmButtonColor: '#d52b1e', confirmButtonText: 'Salir'});

    Swal.update({
      icon: 'error'
    })
  }

}
