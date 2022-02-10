import Product from "../../../../products/infra/typeorm/entities/Product";
import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryColumn,
  UpdateDateColumn,
} from "typeorm";
import Order from "./Order";

@Entity("produto_pedido")
export default class OrderProduct {
  @PrimaryColumn()
  pedido_id: number;

  @PrimaryColumn()
  produto_id: number;

  @Column()
  quantidade: number;

  @ManyToOne(() => Order, (order) => order.produtos_pedidos, {
    orphanedRowAction: "delete",
  })
  @JoinColumn({ name: "pedido_id" })
  pedido: Order;

  @ManyToOne(() => Product, (product) => product.pedido_produtos, {
    orphanedRowAction: "delete",
  })
  @JoinColumn({ name: "produto_id" })
  produto: Product;

  @CreateDateColumn({ select: false })
  created_at: Date;

  @UpdateDateColumn({ select: false })
  updated_at: Date;
}