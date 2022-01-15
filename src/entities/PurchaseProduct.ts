import { Column, Entity, JoinColumn, ManyToOne } from "typeorm";
import { CoisasEmComum } from "./CoisasEmComum";
import { Product } from "./Product";
import { Purchase } from "./Purchase";

@Entity({ name: "purchases_products" })
export class PurchaseProduct extends CoisasEmComum {
  @Column({ name: "uid_product" })
  uidProduct!: string;

  @Column({ name: "uid_purchase" })
  uidPurchase!: string;

  @ManyToOne(() => Purchase, (entity) => entity.purchasesProducts)
  @JoinColumn({ name: "uid_purchase", referencedColumnName: "uid" })
  purchase!: Purchase;

  @ManyToOne(() => Product, (entity) => entity.purchasesProducts)
  @JoinColumn({ name: "uid_product", referencedColumnName: "uid" })
  product!: Product;
}
