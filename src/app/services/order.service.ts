import {EventEmitter, Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Order} from '../models/order.model';
import {environment} from '../../environments/environment';
import {Observable} from 'rxjs';

@Injectable()
export class OrderService {

  order: Order;
  url = environment.baseUrl + 'order';
  orderChanged = new EventEmitter<Order>();

  constructor(private http: HttpClient) {}

  initOrder() {
    this.http.get<Order>(this.url).subscribe(
      order => {
        this.order = order;
        this.orderChanged.emit(order);
      }
    );
  }

  sendOrder(paymentId: string) {
    const header = new HttpHeaders({'Content-Type': 'application/x-www-form-urlencoded'});
    const id = this.order.id;
    this.order = null;
    this.http.post<void>(this.url, {'id': id, 'paymentId': paymentId}, {headers: header}).subscribe(
      () => this.initOrder()
    );
  }

  getAllCompleted(): Observable<Order[]> {
    return this.http.get<Order[]>(`${this.url}/?get-all=true`)
  }
}
