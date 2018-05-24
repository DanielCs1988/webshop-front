import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ProductCategory} from '../models/productCategory.model';
import {environment} from '../../environments/environment';

@Injectable()
export class ProductCategoryService {

  productCategories: ProductCategory[];
  url = environment.baseUrl+'categories';

  constructor(private http: HttpClient) {
    http.get<ProductCategory[]>(this.url).subscribe(
      categories => this.productCategories = categories
    )
  }
}
