import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { NgForm } from '@angular/forms';
import { UsuarioModel } from 'src/app/models/usuarios/usuarios.model';
import { TablausuariosService } from 'src/app/services/tablausuarios.service';

export interface DialogData {
  id: string;
}
@Component({
  selector: 'app-actualizarusuariomodal',
  templateUrl: './actualizarusuariomodal.component.html',
  styleUrls: ['./actualizarusuariomodal.component.css']
})
export class ActualizarusuariomodalComponent implements OnInit {
  usuario: UsuarioModel = new UsuarioModel();
  constructor(public dialogRef: MatDialogRef<ActualizarusuariomodalComponent>, @Inject(MAT_DIALOG_DATA) public data: DialogData,
  private usuarioService: TablausuariosService
  ) { }

  ngOnInit() {
  }

  
  actaulizarUsuario(usuario: UsuarioModel){
    this.usuarioService.putUsuario(usuario)
    .subscribe((resp: any) => {
      console.log(resp);
      
    });
    console.log('holi', usuario.id);
  }
  // actaulizarUsuario(form: NgForm){
  //   this.usuarioService.putUsuario(this.usuario)
  //   .subscribe(resp => {
  //     console.log(resp);
  //   });
  //   // console.log(form);
  //   // console.log(this.usuario, 'este es el usuario a actualizar');
    
  // }
}
