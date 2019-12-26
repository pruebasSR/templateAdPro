import { Component, OnInit } from '@angular/core';
import { UsuarioModel } from './../../models/usuarios/usuarios.model';
import { TablausuariosService } from 'src/app/services/tablausuarios.service';
import { MatTableModule, MatTableDataSource } from '@angular/material/table';
// import { HttpClient } from '@angular/common/http';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DatosusuariomodalComponent } from '../datosusuariomodal/datosusuariomodal.component';
import { ActualizarusuariomodalComponent } from '../actualizarusuariomodal/actualizarusuariomodal.component';

@Component({
  selector: 'app-tablausuarios',
  templateUrl: './tablausuarios.component.html',
  styleUrls: ['./tablausuarios.component.css']
})
export class TablausuariosComponent implements OnInit {
  // usuario: UsuarioModel;
  usuarios: any [] = [];
  id: string;
  dataSource: any;
  /** Arreglo para declarar las cabeceras de la tabla. */
  cols: any[];
  constructor( private usuarioService: TablausuariosService, public dialog: MatDialog) { }

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
  openDialog(id: string, nombre: string, apellido: string, edad: number, peso: string) {
    const dialogRef = this.dialog.open(DatosusuariomodalComponent, {
      width: '500px',
       data: {id: id, nombre: nombre, apellido: apellido, edad: edad, peso: peso}
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      // this.usuario = result;
    });
  }
  openDialogAct(id: string, nombre: string, apellido: string, edad: number, peso: string) {
    const dialogRef = this.dialog.open(ActualizarusuariomodalComponent, {
      width: '500px',
       data: {id: id, nombre: nombre, apellido: apellido, edad: edad, peso: peso}
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      console.log(id);
      
    });
  }
  
}
