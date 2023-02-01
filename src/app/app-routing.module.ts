import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartsComponent } from './pages/carts/carts.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { StoresComponent } from './pages/stores/stores.component'; 

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'stores',component:StoresComponent},
  {path:'login',component:LoginComponent},
  {path:'cart',component:CartsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
// export const routingComponents = [LoginComponent,StoresComponent,HomeComponent] --- esto es una buena practica q no voy a tener en cuenta ahora
