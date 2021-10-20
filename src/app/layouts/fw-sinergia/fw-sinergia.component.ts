import { HttpClient } from '@angular/common/http';
import { Component, HostListener, Input, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import {Router} from '@angular/router';
import { environment } from '@env/environment';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';
import { async, Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import {orgVentasModel} from 'src/app/shared/models/models.interface'
import { FwSinergiaService } from 'src/app/layouts/fw-sinergia/fw-sinergia.service'
import { id } from '@swimlane/ngx-charts';
import { get } from 'jquery';
import { NgbModal, NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';
import { buscarConsultorModel, buscarConsultorResponseModel } from 'src/app/shared/models/buscarConsultorModel';
import {NgbPaginationConfig} from '@ng-bootstrap/ng-bootstrap'; 
import { cabecera } from 'src/app/shared/models/cabeceraModel';

@Component({
  selector: 'app-fw-sinergia',
  templateUrl: './fw-sinergia.component.html',
  styleUrls: ['./fw-sinergia.component.css'],
  providers: [NgbPaginationConfig]
})
export class FwSinergiaComponent implements OnInit {

  @ViewChild(FwSinergiaComponent, { static: false }) table: FwSinergiaComponent;
  constructor(private router:Router, private http:HttpClient, private fwSinergiaService:FwSinergiaService, private fb: FormBuilder, private modalService: NgbModal, config: NgbModalConfig) {
    config.keyboard = false;
    config.backdrop = 'static';

    this.codigoConsultor = '';
    this.nombreConsultor = '';
    this.codigoOrganizacion = '';
    this.orgVentasDescripcion = '';
    this.nombreGcomCentro = '';
    this.descCentro = '';
    this.descripcionSociedad = '';
    this.fecha = '';
    this.habilitarTabs;

    this.socFacForm = this.fb.group({
      P_USERID:localStorage.getItem('token'),
      I_SOCIEDAD:''
    })
  }

  dealersForm: FormGroup;
  eliminarConsultorForm: FormGroup;
  buscarConsultor: FormGroup;
  socFacForm: FormGroup;
  paisesForm: FormGroup;
  perfilesForm: FormGroup;
  resCabForm: FormGroup;
  saveUserForm: FormGroup;
  orgVentasForm: FormGroup;
  centrosForm: FormGroup;

  page = 1;
  collectionSize = [];
  
  I_SOCIEDAD = '';
  fecha:any;
  hoy = new Date();
  valorSociedad = '';
  numeroPerfil;
  nombreUsuarioLogin = '';
  userLogin:buscarConsultorModel; 
  mostrarMensaje = true;
  codigoConsultor:any;
  nombreConsultor: any;
  codigoOrganizacion: any;
  orgVentasDescripcion: any;
  nombreGcomCentro: any;
  descCentro: any;
  descripcionSociedad: any;
  bloqueoTabs = true;  
  userBloquedo = '';
  habilitarTabs:boolean = true;
  listSocFacturas  = [
    {
      CODCONSULTOR: 'CO02',
      titleSoc: 'COMCEL - Fija'
    },
    {
      CODCONSULTOR: 'CO06',
      titleSoc: 'COMCEL - Móvil'
    }
  ];
  mensajeCabecera = 'Señor Consultor por favor seleccione una sociedad.';
  ingresoSegUsuarios = false;
  ingresoCenOficinas = false;
  ingresoProcesoXPerfil = false;
  tituloModulos = '';

  ngOnInit() {    
    this.page = 1;  
    if (this.router.url === '/') {
      this.router.navigate(['/fw-sinergia']);
    }
    this.defaultSidebar = this.options.sidebartype;
    this.handleSidebar();    
    this.userLogin = new buscarConsultorModel();
    var usuarioLogin;
    var respuestaUsuario;
    this.userLogin.P_USERID = localStorage.getItem('token');
    usuarioLogin = this.fwSinergiaService.ObtenerConsultores(this.userLogin).subscribe(res => {
      if(res){
        respuestaUsuario = res;
        this.nombreUsuarioLogin = respuestaUsuario[0].NOMBRECONS;
        this.numeroPerfil = respuestaUsuario[0].PERFIL;            
      }
    });
    this.valorSociedad = '';
    this.fecha = this.hoy.toLocaleDateString(); 
  }
  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.handleSidebar();
  }
  handleSidebar() {
    this.innerWidth = window.innerWidth;
    switch (this.defaultSidebar) {
      case 'full':
        if (this.innerWidth < 1170) {
          this.options.sidebartype = 'mini-sidebar';
        } else {
          this.options.sidebartype = this.defaultSidebar;
        }
        break;
      default:
    }
  }  

  public config: PerfectScrollbarConfigInterface = {};

  tabStatus = 'justified';

  public isCollapsed = false;

  public innerWidth: any;
  public defaultSidebar: any;
  public showSettings = false;
  public showMobileMenu = false;

  options = {
    theme: 'light', // two possible values: light, dark
    dir: 'ltr', // two possible values: ltr, rtl
    layout: 'horizontal', // fixed value. shouldn't be changed.
    sidebartype: 'full', // four possible values: full, iconbar, overlay, mini-sidebar
    sidebarpos: 'absolute', // two possible values: fixed, absolute
    headerpos: 'absolute', // two possible values: fixed, absolute
    boxed: 'full', // two possible values: full, boxed
    navbarbg: 'skin5', // six possible values: skin(1/2/3/4/5/6)
    sidebarbg: 'skin6', // six possible values: skin(1/2/3/4/5/6)
    logobg: 'skin5' // six possible values: skin(1/2/3/4/5/6)
  };

  /* Sociedad Factura */
  cabeceraData:cabecera;
  cargaSociedadFactura(sociedad:string){
    this.mostrarMensaje = false; 
    var respuesta;
    var dataForm;
    if(sociedad !== null && sociedad !== ''){
      const formValue = this.socFacForm.value;
      
    }

  }
  
  segUsuarios(){
    this.ingresoSegUsuarios = true;
    this.ingresoProcesoXPerfil = false;
    this.ingresoCenOficinas = false;
    this.tituloModulos = 'Seguridad - Usuarios';
  }
  
  segCenOficinas(){
    this.ingresoSegUsuarios = false;
    this.ingresoCenOficinas = true;
    this.ingresoProcesoXPerfil = false;
    this.tituloModulos = 'Seguridad - Configuración de Centros y Oficinas';
  }

  segProcXPerfil(){
    this.ingresoSegUsuarios = false;
    this.ingresoCenOficinas = false;
    this.ingresoProcesoXPerfil = true;
    this.tituloModulos = 'Seguridad - Procesos X Perfil';
  }

  openAlert(contentModal){
    this.modalService.open(contentModal,{ size: 'sm' });
  }

}

