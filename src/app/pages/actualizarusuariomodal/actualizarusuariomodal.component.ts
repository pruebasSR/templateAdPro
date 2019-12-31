import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { NgForm } from '@angular/forms';
import { UsuarioModel } from 'src/app/models/usuarios/usuarios.model';
import { TablausuariosService } from 'src/app/services/tablausuarios.service';
import Swal from 'sweetalert2';
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
  ) { console.log(data, 'esta es la data del modal de actualizar');
   }

  ngOnInit() {
  }

  
  actaulizarUsuario(usuario: UsuarioModel){
    Swal.fire({
      title: "¿Estas seguro?",
      text: `Se actualizará el usuario ${usuario.nombre}`,
      icon: 'question',
      showConfirmButton: true,
      showCancelButton: true
    }).then( resp => {
      if (resp.value) {
        this.usuarioService.putUsuario(usuario)
          .subscribe((resp: any) => {
            console.log(resp,'data del actualizarusuariomodel.ts');
        });
        Swal.fire({
          title: "El usuario ha sido actualizado",
          text: "correctamente!",
          icon: "success"
        }).then(res => {
          if (res.value){
            this.usuarioService.getUsuarios();
            location.reload();
          }
        });
        // this.usuarioService.getUsuarios();
        // location.reload();
        
      }else{
        // this.usuarioService.getUsuarios();
        // location.reload();
      }
    });



    // this.usuarioService.putUsuario(usuario)
    // .subscribe((resp: any) => {
    //   console.log(resp,'data del actualizarusuariomodel.ts');
    // });
    // console.log('holi', usuario.id);
  }
}
