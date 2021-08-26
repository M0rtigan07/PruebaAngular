import { Component } from '@angular/core';
import { ProductoService } from './Productos/producto.service';

@Component({
  selector: 'app-root',
  template: `<div class="jumbotron" style=" background-color:darkcyan;letter-spacing:3px;"><h1 class="text-center">{{title}}</h1></div>
              
              <img class="img-responsive, img-thumbnail" style=" background-color:darkcyan;height:440px;margin-left:30px;border:groove" src="{{urlImagen}}"/>
              <br>
              <button (click)="onClickMe($event)" class="btn btn-primary" style="margin-left:50px;margin-top:15px;letter-spacing:2px;">Enviar</button>
              <producto></producto>`,
  providers:[ProductoService],
  //templateUrl: './app.component.html',
  styleUrls:['./app.component.css']
  
})
export class AppComponent {
  title = 'Mi aplicación';
  urlImagen = "https://res.cloudinary.com/practicaldev/image/fetch/s--X22eExlY--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/g1i4yy4ukog9qofzpleq.png"
  onClickMe($event) { alert("Clicado"); }
}
