import { Component } from '@angular/core';

@Component({
  selector: 'producto',
  template: `<h2>Producto</h2>
              <ul><li *ngFor="let p of prod">{{p}}</li></ul>`

})

export class ProductoComponent {

  prod = ["Manual de Angular", "Manual de C#", "Manual de HTML"];
  
 
}

