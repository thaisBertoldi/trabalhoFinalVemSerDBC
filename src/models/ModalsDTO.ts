export interface ModalDTO {
  open?: boolean;
  id?: number;
}

export interface ModalComponentDTO {
  id?: number;
  onClick: Function | any;
}

export interface ItensInTopicDTO {
  description: string;
  file: string;
  itemName: string;
  value: number;
};

