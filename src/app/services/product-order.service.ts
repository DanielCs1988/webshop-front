import {Injectable, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {OrderService} from './order.service';
import {Product} from '../models/product.model';
import {ProductOrder} from '../models/productOrder.model';
import {environment} from '../../environments/environment';

@Injectable()
export class ProductOrderService implements OnInit {

  productOrders: ProductOrder[];
  orderId: number;
  private url = environment.baseUrl + 'product-order';

  constructor(private http: HttpClient, private orderService: OrderService) {}

  ngOnInit(): void {
    this.productOrders = this.orderService.order.productOrders;
    this.orderId = this.orderService.order.id;
  }

  itemToCart(product: Product) {
    const productOrder = this.productOrders.find(po => po.productId === product.id);
    if (productOrder === undefined) {
      this.addProductOrder(new ProductOrder(0, 1, this.orderId, product.id, product));
    } else {
      this.changeQuantity(product.id, 1);
    }
  }

  addProductOrder(productOrder: ProductOrder) {
    this.http.post<number>(this.url, productOrder).subscribe(
      id => {
        productOrder.id = id;
        this.productOrders.push(productOrder);
      }
    );
  }

  changeQuantity(productId: number, amount: number) {
    if (!(amount === 1 || amount === -1)) {
      return;
    }
    for (let i = 0; i < this.productOrders.length; i++) {
      if (this.productOrders[i].productId === productId) {
        this.productOrders[i].quantity += amount;
        this.http.put(this.url, this.productOrders[i]).subscribe();
      }
    }
  }

  removeProductOrder(poId: number) {
    this.productOrders = this.productOrders.filter(po => po.id !== poId);
    this.http.delete(`${this.url}?id=${poId}`).subscribe();
  }
}
