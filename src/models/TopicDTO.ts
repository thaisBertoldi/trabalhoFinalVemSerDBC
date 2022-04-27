import { isLoggedDTO } from "./UserDTO"

export interface TopicDTO {
  title: string
  date: string
  status: number
  topicId: number
  totalValue: number
}

export interface TopicComponentDTO {
  item: TopicDTO
  user: isLoggedDTO["user"]
  setOpenModalQuotation: Function
  setOpenModalAddQuotation: Function
  setOpenModalItens: Function
}

export interface CardItemHomeProps {
  id: number;
}