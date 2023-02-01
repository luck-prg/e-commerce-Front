import { Injectable } from '@angular/core';
import { LoginI } from '../interfaces/login.interface';
import { ResponseLoginI } from '../interfaces/responseLogin.interface';
import { HttpClient , HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ResponseItemI } from '../interfaces/responseItem.interface';
import { ItemDTOI } from '../interfaces/itemDTO.interface';
@Injectable({
  providedIn: 'root'
})
export class TiendaService {

  url:string = "http://localhost:8080/"

  constructor(private http:HttpClient) {}

  // Validar usuario
  loginUser(form:LoginI):Observable<ResponseLoginI>{
    let direccion = this.url + "usuarios/login";
    return this.http.post<ResponseLoginI>(direccion,form);
  }

  obtenerVendedores(){
    let direccion = this.url + "usuarios/vendedores?size=4&page=0";
    return this.http.get(direccion);
  }

  obtenerTodosLosProductosP(){
    let direccion = this.url + "productospersonalizados?size=9&page=0";
    return this.http.get(direccion);
  }


  obtenerTodosLosCarritos(id:string){
    let direccion = this.url + "usuarios/" + id + "/carritos?size=6&page=0";
    return this.http.get(direccion);
  }

  obtenerProductosDeCarrito(id:string){
    let direccion = this.url + "carritos/" + id + "/productos";
    return this.http.get(direccion);
  }

  obtenerProductosPDe(user_id:string){
    let direccion = this.url + "usuarios/" + user_id + "/productospersonalizados?size=4&page=0";
    return this.http.get(direccion);
  }

  agregarItem(item:ItemDTOI):Observable<any>{
    let direccion = this.url + "/carrito/agregarproducto";
    return this.http.post<any>(direccion,item);
  }

  /* agregarProductoP_a_carrito(form:ItemI):Observable<ResponseItemI>{
    let direccion = this.url + "usuarios/" + form.cliente_id +"/carrito/agregar";
    return this.http.post<ResponseLoginI>(direccion,form);
  } */


}
