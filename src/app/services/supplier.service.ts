import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Supplier} from '../models/supplier.model';
import {environment} from '../../environments/environment';

@Injectable()
export class SupplierService {
  suppliers: Supplier[];
  url = environment.baseUrl+'suppliers';

  constructor(private http: HttpClient) {
    http.get<Supplier[]>(this.url).subscribe(
      suppliers => this.suppliers = suppliers
    )
  }
}
