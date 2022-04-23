export interface NewRequestPurchase {
  itemName: string;
  description: string;
  value: string;
  file: string;
}

export interface NewRequestPurchaseArray {
  item: {
    itemName: string;
    description: string;
    value: string;
    file: string;
  }[];
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
