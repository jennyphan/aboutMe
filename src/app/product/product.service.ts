import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

import 'rxjs/add/operator/map';


/**
 * This is Product Service
 */
export class Image {
  constructor() {
  }
}


@Injectable()
export class ProductService {
  products: FirebaseListObservable<any[]>;

  constructor(af: AngularFireDatabase) {
    this.products = af.list('/products');
  }

  getproducts(){
    console.log(this.products);
    return this.products;
  }


}
