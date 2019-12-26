import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UsuarioModel } from 'src/app/models/usuarios/usuarios.model';
import { TablausuariosService } from 'src/app/services/tablausuarios.service';

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
    this.usuarioService.postUsuario(this.usuario)
    .subscribe(resp => {
      console.log(resp);
    });
    // console.log(form);
    // console.log(this.usuario);
    
  }

}
