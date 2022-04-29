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
  OPEN = '#00EB01' as any,
  MANAGER_APPROVED = '#F1F70C' as any,
  MANAGER_REPROVED = '#FDB400' as any,
  FINANCIALLY_REPROVED = '#FDB400' as any,
  CONCLUDED = '#01F7F7' as any
}