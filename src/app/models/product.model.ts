export class Product {
  constructor(
    public id: number,
    public defaultPrice: number,
    public defaultCurrency: string,
    public imageName: string,
    public productCategoryId: number,
    public supplierId: number
  ) {
  }
}
