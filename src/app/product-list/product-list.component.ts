import { Component, OnInit } from '@angular/core';
import {Product} from '../models/product.model';
import {ProductListService} from '../services/product-list.service';
import {ActivatedRoute, Params} from '@angular/router';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
  providers: [ProductListService]
})
export class ProductListComponent implements OnInit {

  products: Product[] = [];
  categoryFilter: number = null;
  supplierFilter: number = null;

  constructor(public productListService: ProductListService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.productListService.getProducts().subscribe(
      products => this.products = products
    );
    this.route.queryParams.subscribe(
      (params: Params) => {
        this.categoryFilter = params['category'] ? +params['category'] : null;
        this.supplierFilter = params['supplier'] ? +params['supplier'] : null;
        console.log(this.categoryFilter, this.supplierFilter);
      }
    );
  }

}
