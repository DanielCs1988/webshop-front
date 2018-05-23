import { Component, OnInit } from '@angular/core';
import {Product} from '../models/product.model';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  products: Product[] = [
    new Product(1, 'iFosh', 'Ez egy szar', 100, 'USD', 'valami', 2, 3),
    new Product(1, 'iFosh', 'Ez egy szar', 100, 'USD', 'valami', 2, 3),
    new Product(1, 'iFosh', 'Ez egy szar', 100, 'USD', 'valami', 2, 3),
    new Product(1, 'iFosh', 'Ez egy szar', 100, 'USD', 'valami', 2, 3)];

  constructor() { }

  ngOnInit() {
  }

}
