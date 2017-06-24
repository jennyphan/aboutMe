import { Component, OnInit } from '@angular/core';
import { ProductService } from './product.service';
import { FirebaseListObservable } from 'angularfire2/database';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
  providers: [ProductService]
})

export class ProductComponent implements OnInit {

  products: FirebaseListObservable<any[]>;
  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.products = this.productService.getproducts();
  }


}
