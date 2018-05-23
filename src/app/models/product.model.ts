export class Product {
  constructor(
    public defaultPrice: number,
    public defaultCurrency: string,
    public imageName: string,
    public productCategoryId: number,
    public supplierId: number
  ) {
  }
}
