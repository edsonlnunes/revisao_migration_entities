import { Column, Entity, OneToMany } from "typeorm";
import { CoisasEmComum } from "./CoisasEmComum";
import { PurchaseProduct } from "./PurchaseProduct";

@Entity({ name: "products" })
export class Product extends CoisasEmComum {
  @Column()
  name!: string;

  @Column()
  amount!: number;

  @Column()
  category!: string;

  @OneToMany(() => PurchaseProduct, (entity) => entity.product)
  purchasesProducts!: Array<PurchaseProduct>;
}
