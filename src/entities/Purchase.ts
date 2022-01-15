import { Column, Entity, JoinColumn, ManyToOne, OneToMany } from "typeorm";
import { CoisasEmComum } from "./CoisasEmComum";
import { PurchaseProduct } from "./PurchaseProduct";
import { User } from "./User";

@Entity({ name: "purchases" })
export class Purchase extends CoisasEmComum {
  @Column()
  amount!: number;

  @Column()
  date!: Date;

  @Column({ name: "uid_user" })
  uidUser!: string;

  @ManyToOne(() => User, (entity) => entity.purchases)
  @JoinColumn({ name: "uid_user", referencedColumnName: "uid" })
  user!: User;

  @OneToMany(() => PurchaseProduct, (entity) => entity.purchase)
  purchasesProducts!: Array<PurchaseProduct>;
}
