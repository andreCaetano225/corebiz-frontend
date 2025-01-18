export interface ProductType {
  productId: number;
  productName: string;
  stars: number;
  imageUrl: string;
  listPrice: any;
  price: number;
  installments: Installment[];
}

export interface Installment {
  quantity: number;
  value: number;
}
