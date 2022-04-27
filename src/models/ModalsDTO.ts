import { isLoggedDTO } from "./UserDTO";

export interface ModalDTO {
  open?: boolean;
  id?: number;
}

export interface ModalComponentDTO {
  id?: number;
  user?: isLoggedDTO['user'];
  onClick: Function | any;
}

export interface ItensInTopicDTO {
  description: string;
  file: string;
  itemName: string;
  value: number;
};

export interface ModalQuotationDTO {
  id: number | undefined;
  user: isLoggedDTO['user'];
  onClick: Function | any;
}

export interface ModalQuotationValuesDTO {
  quotationId: number;
  quotationPrice: number;
  quotationStatus: number;
  topicId: number;
}
