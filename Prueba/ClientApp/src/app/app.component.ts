import { Component } from '@angular/core';
import { ProductoService } from './Productos/producto.service';

@Component({
  selector: 'app-root',
  template: `<div class="jumbotron" style=""><h1 class="text-center">{{title}}</h1></div>
              
              <img class="img-responsive, img-thumbnail" src="{{urlImagen}}"/>
              <br>
              <producto></producto>`,
  providers:[ProductoService],
  //templateUrl: './app.component.html',
  styleUrls:['./app.component.css']
  
})
export class AppComponent {
  title = 'Mi aplicación';
  urlImagen ="https://res.cloudinary.com/practicaldev/image/fetch/s--X22eExlY--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/g1i4yy4ukog9qofzpleq.png"
}
