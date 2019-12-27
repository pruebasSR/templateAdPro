import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { UsuarioModel } from '../models/usuarios/usuarios.model';

@Injectable({
  providedIn: 'root'
})
export class TablausuariosService {
  
  url = 'https://dosgral.firebaseio.com/'
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

  postUsuario(usuario: UsuarioModel){
    return this.http.post(`${this.url}/personas.json`, usuario)
    .pipe(
      map( (resp: any) => {
        usuario.id = resp.name;
        return usuario;
      })
    );
  }
  // putUsuario(id: string){
  //   return this.http.put(`${this.url}/personas/${ id }.json`, usuario);
  // }
  putUsuario(usuario: UsuarioModel){
    const usuarioTemp = {
      ...usuario // operador spread
    };
    delete usuarioTemp.id;

    console.log(usuario.id,'usuario servicio');
    return this.http.put(`${this.url}/personas/${ usuario.id }.json`, usuarioTemp);
    
  }
  deleteUser(id: string){
    return this.http.delete(`${this.url}/personas/${ id }.json`);
  }
}
