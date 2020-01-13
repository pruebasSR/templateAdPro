import { Component, OnInit } from '@angular/core';
import { TablausuariosService } from '../../services/tablausuarios.service';

@Component({
  selector: 'app-prueba',
  templateUrl: './prueba.component.html',
  styleUrls: ['./prueba.component.css']
})
export class PruebaComponent implements OnInit {

  usuario: any [] = [];

  constructor( private tss: TablausuariosService) { }

  ngOnInit() {
    this.ou();
  }

  ou() {
    this.tss.getUsuarios().subscribe(resp => {
      console.log(resp);
      this.usuario = resp;
    });
  }

}
