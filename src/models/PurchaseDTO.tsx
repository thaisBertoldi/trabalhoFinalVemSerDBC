export interface NewRequestPurchase {
  name: string,
  description: string,
  price: string,
  file: string,
}
export interface PurchaseDTO {
  auth: {
    listName: string;
    itemName: string;
    description: string;
    value: string;
    file: string;
  };
}

export interface TitlePurchaseDTO {
  title: string
}
