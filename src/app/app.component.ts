import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'tpCapgemini-front';
  show:boolean = true;


  cambiarShow(showNuevo:boolean){
    console.log(showNuevo);
    this.show = showNuevo;
  }


}


