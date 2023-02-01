import { Component, OnInit } from '@angular/core';
import { NgbAccordionConfig } from '@ng-bootstrap/ng-bootstrap';
import { TiendaService } from 'src/app/services/tienda.service';

@Component({
  selector: 'app-carts',
  templateUrl: './carts.component.html',
  styleUrls: ['./carts.component.css']
})
export class CartsComponent implements OnInit {

  carritos: any[] = [];
  productosCarrito: any[] = [];
  total:number = 0;

  constructor(
    private _config:NgbAccordionConfig,
    private apiService: TiendaService){ 

  }

  ngOnInit(): void {
    this.obtenerCarritos()
  }


  mostrarCarrito(carrito:any){
    this.total = carrito.productos.reduce((
      acc:any,
      producto:any,
    ) => acc + ((producto.producto.producto_Base.precio_Base + producto.producto.precio) * producto.cantidad),
    0);
  }

  obtenerCarritos(){
    if(localStorage.getItem('user_id') != null){
      this.apiService.obtenerTodosLosCarritos(localStorage.getItem('user_id')!)
      .subscribe((carritos_api:any) => {
        console.log(carritos_api);
        this.carritos = carritos_api.content;
        console.log(this.carritos);
      })
    }
  }

  /*
  calcularTotalItem(item:any){
    item.productopersonalizado.producto_Base.precio_base + item.productopersonalizado.personalizaciones
    .map((personalizacion:any) => personalizacion.precio)
    .sum()
  } */
  
  


}
