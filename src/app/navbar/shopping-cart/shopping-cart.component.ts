import { Component, OnInit } from '@angular/core';
import {ProductOrderService} from '../../services/product-order.service';
import {ProductOrder} from '../../models/productOrder.model';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {

  orders: ProductOrder[] = [];

  constructor(public productOrderService: ProductOrderService) { }

  ngOnInit() {
    this.orders = this.productOrderService.productOrders;
  }

}
