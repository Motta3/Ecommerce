import IOrderProductDTO from "./IOrderProductDTO";

export default interface IOrderDTO {
  id?: number;
  status: string;
  valor: number;

  cliente_id: number;
  forma_pagamento: string;
  desconto?: number;
  produtos_pedidos: IOrderProductDTO[];
}
