import { Component, OnInit } from '@angular/core';
import {OrderService} from '../../services/order.service';

@Component({
  selector: 'app-paypal',
  templateUrl: './paypal.component.html',
  styleUrls: ['./paypal.component.css']
})
export class PaypalComponent implements OnInit {

  constructor(private orderService: OrderService) { }

  ngOnInit() {
  }

  onSendOrder() {
    this.orderService.sendOrder(Math.random()*90000000+10000000+'')
  }
}
