import { Column, Entity, OneToMany } from "typeorm";
import { Address } from "./Address";
import { CoisasEmComum } from "./CoisasEmComum";

@Entity()
export class ProfileData extends CoisasEmComum {
  @Column()
  name!: string;

  @Column()
  email!: string;

  @Column()
  document!: string;

  @Column({ name: "phone_number" })
  phoneNumber!: string;

  @OneToMany(() => Address, (entity) => entity.profile)
  addresses!: Array<Address>;
}
