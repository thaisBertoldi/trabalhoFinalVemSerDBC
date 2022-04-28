export interface NewRequestPurchase {
  itemName: string,
  description: string,
  value: string,
  file: string,
  itemId: number,
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
