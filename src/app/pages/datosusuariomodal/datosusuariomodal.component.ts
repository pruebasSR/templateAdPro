import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { UsuarioModel } from 'src/app/models/usuarios/usuarios.model';
export interface DialogData {
  id: string;
}
@Component({
  selector: 'app-datosusuariomodal',
  templateUrl: './datosusuariomodal.component.html',
  styleUrls: ['./datosusuariomodal.component.css']
})
export class DatosusuariomodalComponent implements OnInit {
  usuario: UsuarioModel;
  constructor(public dialogRef: MatDialogRef<DatosusuariomodalComponent>, @Inject(MAT_DIALOG_DATA) public data: DialogData ) { }

  ngOnInit() {
  }

}
