import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UsuarioModel } from 'src/app/models/usuarios/usuarios.model';
import { TablausuariosService } from 'src/app/services/tablausuarios.service';
import  Swal  from 'sweetalert2';
// import Swal from './../../../../node_modules/sweetalert2/dist/sweetalert2.js';
@Component({
  selector: 'app-agregaruser',
  templateUrl: './agregaruser.component.html',
  styleUrls: ['./agregaruser.component.css']
})
export class AgregaruserComponent implements OnInit {
  usuario: UsuarioModel = new UsuarioModel();
  constructor( private usuarioService: TablausuariosService ) { }
  
  ngOnInit() {
  }
  guardar(form: NgForm){
    if (form.valid) {
      console.log('paso');
      this.usuarioService.postUsuario(this.usuario)
      .subscribe(resp => {
        console.log(resp);
        Swal.fire({
          icon:'success',
          title: 'Agregado Correctamente',
          text: resp.nombre
        })
        .then(function (result) {
          console.log(result);
            form.reset();  
        });
    });
    }else{
      Swal.fire({
        icon: 'error',
        title: 'Algo salió mal',
        text: 'Vuelve a intentarlo..'
      })
    }
    
    console.log(form);
    // console.log(this.usuario);      
    }
  }
  
  // const v1 = document.getElementById('nombre');  