import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'capi-cotizacion-ventas',
  templateUrl: './cotizacion-ventas.component.html',
  styleUrls: ['./cotizacion-ventas.component.css']
})
export class CotizacionVentasComponent implements OnInit {
  public permission: boolean;
  public pageTitle: string = 'Ventas';
  public filtro: string = 'Vendido';
  public data: any = {project_id: 0, clientes_id: [], negociaciones_id: [], etapa: 'vendido'};
  constructor(private _Activatedroute: ActivatedRoute) {
    this.permission = sessionStorage.getItem('permission') === 'e';
  }

  ngOnInit() {
    let self = this;
    self._Activatedroute.data.subscribe(function(data){
      self.pageTitle = data.pageTitle;
      self.filtro = data.filtro;
    });
  }

  sendData(data){
    data.etapa = this.filtro;
    this.data = data;
  }

}
