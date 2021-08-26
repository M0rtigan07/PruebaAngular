import { Component } from '@angular/core';
import { ProductoService } from './producto.service';

@Component({
  selector: 'producto',
  template: `<h2 class="text-center" style="margin-left:20px;">Producto</h2>
               <div class="jumbotron" style="margin-left:15px;margin-right:15px;background-color:cadetblue;">
              <ul class="list-group"><li *ngFor="let p of prod" class="list-group-item">{{p}}</li></ul></div>`,
  styleUrls: ['./producto.component.css']

})

export class ProductoComponent {

  //prod = ["Manual de Angular", "Manual de C#", "Manual de HTML"];
  prod;
  constructor(productService: ProductoService)
  {
    this.prod = productService.getPoductos();
  }

  
 
}

