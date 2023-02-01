import { Component, EventEmitter, OnInit, Output } from '@angular/core';

import { FormGroup,FormControl,Validators, Form, FormBuilder } from '@angular/forms';

import { TiendaService } from 'src/app/services/tienda.service';
import { LoginI } from 'src/app/interfaces/login.interface';
import { Route, Router } from '@angular/router';
import { ResponseLoginI } from 'src/app/interfaces/responseLogin.interface';


/*
Login completado
- Falta: - ver boton para q vuelva a aparece el nav y el footer (volver al menu)
         - Cuando esta logueado el usuario, borrar lo botones login y registrar del nav y poner un boton con el nombre
*/



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  @Output() eventDataa = new EventEmitter<boolean>();

  loginForm = new FormGroup({
    user: new FormControl('',Validators.required),
    password : new FormControl('',Validators.required)
  });

  private infoLogin: ResponseLoginI|null;

  private sesionIniciada:boolean;

  constructor( 
    private formBuilder: FormBuilder,
    private router: Router, 
    private api:TiendaService){ 
      this.infoLogin = null;
      this.sesionIniciada = false;
    }

  ngOnInit(): void {
    this.recuperarUsurioSiEsPosible();
  }

  // -------------- Realizando un login sencillo 

  onLogin(form:LoginI){ // para el login
    console.log(form);
    this.api.loginUser(form).subscribe(data => 
      console.log(data));
  }

  // ---------------- Para q desaparezca el navbar y el footer (NO FUNCA)

  cambiarVisibilidad(showNuevo:boolean): void{ // para que esto funcione tengo que exportar el componente creo 
    this.eventDataa.emit(showNuevo);
  }

  // -------------- Guardar usuario en LocalStorage y validacion

  // funcion que valida en base un user y password un usuario de la db
  validarUsuario(form:LoginI){
    console.log(form);
    if(localStorage.getItem('user') == form.user && localStorage.getItem('password') == form.password){
      // me ahorro el tema de ir a la base de datos
      // TIENEN QUE SER DISTINTOS DE NULL?
      this.sesionIniciada = true;
      this.irAStores();
    }
    const infoLogin = this.api.loginUser(form)
      .subscribe(data =>{
        console.log(data);
        this.infoLogin = data;
        this.guardar(this.infoLogin!!); });
  }

  private mostrarPorConsolaLocalStorage(clave: string){
    console.log(localStorage.getItem(clave));
  }

  private recuperarUsurioSiEsPosible(){
    if(localStorage.getItem('user') != null){
      this.loginForm?.controls['user'].setValue(localStorage.getItem('user'));
    }

    if(localStorage.getItem('password') != null){
      this.loginForm?.controls['password'].setValue(localStorage.getItem('password'));
    }
  }

  guardar(info:ResponseLoginI) {
    console.log("probando " + info.user_id);
    if(info.opCode == "CONTRASEÑO O USUARIO INCORRECTOS"){
       return; // valid dice si el formulario es valido o no
     }
 
     const user = this.loginForm?.get('user')?.value;
     const password = this.loginForm?.get('password')?.value;
 
     localStorage.setItem('user',user!!);
     localStorage.setItem('password',password!!);
     localStorage.setItem('user_id', info.user_id!! );
     localStorage.setItem('nombre',info.name!!);
     localStorage.setItem('nombre',info.tipo!!);
 
     this.mostrarPorConsolaLocalStorage('user');
     this.mostrarPorConsolaLocalStorage('password');
     this.sesionIniciada = true;
     this.irAStores(); 
 
   } 
   
// gets

   get nombre(){
     return this.loginForm?.get('user');
   }
 
   get password(){
     return this.loginForm?.get('password');
   }

// direccionar pagina 

   irAStores(){
     this.router.navigate(['stores']);
   } 




}
