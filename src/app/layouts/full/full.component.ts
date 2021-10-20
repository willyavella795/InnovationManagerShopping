import { Component, OnInit, HostListener } from '@angular/core';
import { Router } from '@angular/router';
declare var $: any;

import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';
import { buscarConsultorModel } from 'src/app/shared/models/buscarConsultorModel';
import { FwSinergiaService } from '../fw-sinergia/fw-sinergia.service';

@Component({
  selector: 'app-full-layout',
  templateUrl: './full.component.html',
  styleUrls: ['./full.component.scss']
})
export class FullComponent implements OnInit {
  public config: PerfectScrollbarConfigInterface = {};

  constructor(public router: Router, private fwSinergiaService:FwSinergiaService) { }

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

  userLogin:buscarConsultorModel; 
  nombreUsuarioLogin = '';
  ngOnInit() {
    if (this.router.url === '/') {
      this.router.navigate(['./fw-sinergia']);
    }
    this.defaultSidebar = this.options.sidebartype;
    this.handleSidebar();

    this.userLogin = new buscarConsultorModel;
    var usuarioLogin;
    var respuestaUsuario;
    this.userLogin.P_USERID = localStorage.getItem('token');
    usuarioLogin = this.fwSinergiaService.ObtenerConsultores(this.userLogin).subscribe(res => {
      if(res){
        debugger;
        respuestaUsuario = res;
        this.nombreUsuarioLogin = respuestaUsuario[0].NOMBRECONS;            
      }
    });

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
}
