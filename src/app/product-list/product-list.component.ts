import { Component, OnInit } from '@angular/core';
import {Product} from '../models/product.model';
import {ProductListService} from '../services/product-list.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
  providers: [ProductListService]
})
export class ProductListComponent implements OnInit {

  products: Product[] = [];

  constructor(public productListService: ProductListService) { }

  ngOnInit() {
    this.productListService.getProducts().subscribe(
      products => {
        this.products = products;
        console.log(this.products);}
    )
  }

}
