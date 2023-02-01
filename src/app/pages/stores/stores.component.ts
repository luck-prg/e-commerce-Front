import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ItemDTOI } from 'src/app/interfaces/itemDTO.interface';
import { TiendaService } from 'src/app/services/tienda.service';

@Component({
  selector: 'app-stores',
  templateUrl: './stores.component.html',
  styleUrls: ['./stores.component.css']
})
export class StoresComponent implements OnInit {

  productosP: any[] = [];
  vendedores: any[] = [];
  indice:string = "Todos los productos";

  addToCartForm = new FormGroup({
    cantidad: new FormControl('',Validators.required)
  });

  private item:any = {
    cantidad: '',
    producto_id:'',
    cliente_id:''
  }


  constructor(
    private apiService: TiendaService
  ) { 
  }

  ngOnInit(): void {
    this.apiService.obtenerVendedores()
      .subscribe((vendedores_api:any) => {
        console.log(vendedores_api);
        this.vendedores = vendedores_api.content;
        console.log(this.vendedores);
      })
    this.mostrarTodosPrudctosP()
  } 

  mostrarProductosP(id:string,nombreVendedor:string){
    this.apiService.obtenerProductosPDe(id)
    .subscribe((productosP_api:any) => {
      this.productosP = productosP_api.content;
    })
    this.indice = "Tienda de " + nombreVendedor;
  } 

  mostrarTodosPrudctosP(){
    this.apiService.obtenerTodosLosProductosP()
    .subscribe((productosP_api:any) => {
      console.log(productosP_api);
      this.productosP = productosP_api.content;
    })
    this.indice="Todos los productos";
  }

  agregarAlCarrito(form:any,productoP_id:number){
    this.item.setValue('producto_id',productoP_id);
    this.item.setValue('cantidad',form.cantidad);
    console.log(this.item);
  }

}
