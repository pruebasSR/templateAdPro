import { Component, OnInit } from '@angular/core';
import { UsuarioModel } from './../../models/usuarios/usuarios.model';
import { TablausuariosService } from 'src/app/services/tablausuarios.service';
import { MatTableModule, MatTableDataSource } from '@angular/material/table';
// import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-tablausuarios',
  templateUrl: './tablausuarios.component.html',
  styleUrls: ['./tablausuarios.component.css']
})
export class TablausuariosComponent implements OnInit {
  usuarios: any [] = [];
  dataSource: any;
  /** Arreglo para declarar las cabeceras de la tabla. */
  cols: any[];
  constructor( private usuarioService: TablausuariosService) { }

  ngOnInit() {
    this.cols = [
      'detalles',
      // 'id',
      'nombre',
      'apellido',
      'edad',
      'peso',
      'acciones'
    ];
    this.getUsuarios();
  }

  getUsuarios(){
    this.usuarioService.getUsuarios().subscribe(data => {
      console.log(data);  
      this.usuarios = data;
      this.dataSource = new MatTableDataSource(this.usuarios);    
    }); 
  }
  verDatos(id: string) {
    // this.dialogoService.open(DatosVacantesComponent, {
    //   context: {
    //     idVacante: idVacante,
    //   },
    // });
    console.log(id);
    
  }
}
