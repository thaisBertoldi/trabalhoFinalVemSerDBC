export interface NewRequestPurshace {
  itemName: string;
  description: string;
  value: string;
  file: string;
}

export interface PurshaceDTO {
  auth: {
    listName: string;
    itemName: string;
    description: string;
    value: string;
    file: string;
  };
}
