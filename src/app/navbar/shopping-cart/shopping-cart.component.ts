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

  decrementQuantity(order) {
    this.productOrderService.changeQuantity(order.product.id, -1);
  }

 incrementQuantity(order) {
    this.productOrderService.changeQuantity(order.product.id, 1);
  }

  removeOrder(order) {
    this.productOrderService.removeProductOrder(order.product.id);
  }

  getSumPrice() {
    for (let order of this.orders) {
      let sumPrice = 0;
      sumPrice += order.product.defaultPrice * order.quantity;
    }
  }
}
