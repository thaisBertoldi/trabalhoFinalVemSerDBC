export enum StatusEnum {
  CREATING = 'Criando' as any,
  OPEN = 'Aberto' as any,
  MANAGER_APPROVED = 'Aprovado pelo gestor' as any,
  MANAGER_REPROVED = 'Reprovado pelo gestor' as any,
  FINANCIALLY_REPROVED = 'Reprovado financeiro' as any,
  CONCLUDED = 'Concluído' as any
}

export enum ColorEnum {
  CREATING = "rgb(119,119,119)" as any,
  OPEN = '#009100' as any,
  MANAGER_APPROVED = '#F1E849' as any,
  MANAGER_REPROVED = '#FE0000' as any,
  FINANCIALLY_REPROVED = '#FE0000' as any,
  CLOSED = '#2B55ED' as any
}