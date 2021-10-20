import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@env/environment';
import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { eliminarConsultorModel, centrosModel, centrosResponseModel, orgVentasModel, orgVentasResponseModel, eliminarConsultorResponseModel, dealersModel } from 'src/app/shared/models/models.interface';

import { buscarConsultorModel, buscarConsultorResponseModel } from 'src/app/shared/models/buscarConsultorModel';
import { cabecera, cabeceraResponse } from 'src/app/shared/models/cabeceraModel';

@Injectable({
  providedIn: 'root'
})
export class FwSinergiaService {

  constructor(private http:HttpClient) { }

  obtenerDatosCabecera(cabData:cabecera):Observable<cabeceraResponse>{
    return this.http
    .post<cabeceraResponse>(`${environment.API_URL}${environment.ApiCabecera}`, cabData)
    .pipe(      
      map((res:cabeceraResponse) => {
        return res;
      }),
      catchError((err) => this.handleError(err))
    )
  }

  ObtenerConsultores(cabData:buscarConsultorModel):Observable<buscarConsultorResponseModel>{
    return this.http
    .post<buscarConsultorResponseModel>(`${environment.API_URL}${environment.ApiBuscarConsultor}`, cabData)
    .pipe(
      
      map((res:buscarConsultorResponseModel) => {
        return res;
      }),
      catchError((err) => this.handleError(err))
    )
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
