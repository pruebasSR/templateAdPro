import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { UsuarioModel } from '../models/usuarios/usuarios.model';
@Injectable({
  providedIn: 'root'
})
export class TablausuariosService {
  
  url = 'https://graldata-59a68.firebaseio.com/'
  constructor(private http: HttpClient ) { }
  getUsuarios(){
    return this.http.get(`${this.url}/personas.json`).pipe(
      map(resp => this.crearArreglo(resp))
    );
  }
  /*convertir objetos en arreglos*/
  private crearArreglo(usuariosObj: Object){
    const usuario: UsuarioModel [] = [];
    console.log(usuariosObj);
    // por si la base no tiene nada, esta es la validacion de ello
    if (usuariosObj == null){
      return [];
    }
    // 
    Object.keys( usuariosObj ).forEach( key => {
      const per: UsuarioModel = usuariosObj[key];
      per.id = key;
      usuario.push(per);
    });
     return usuario;
  };
}
