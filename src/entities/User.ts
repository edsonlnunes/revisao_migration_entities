import { Column, Entity, JoinColumn, OneToMany, OneToOne } from "typeorm";
import { CoisasEmComum } from "./CoisasEmComum";
import { ProfileData } from "./ProfileData";
import { Purchase } from "./Purchase";

@Entity({ name: "users" })
export class User extends CoisasEmComum {
  @Column()
  username!: string;

  @Column()
  password!: string;

  @Column()
  enable!: boolean;

  @Column({ name: "uid_profile_data" })
  uidProfileData!: string;

  @OneToOne(() => ProfileData)
  @JoinColumn({ name: "uid_profile_data", referencedColumnName: "uid" })
  profile!: ProfileData;

  @OneToMany(() => Purchase, (entity) => entity.user)
  purchases!: Array<Purchase>;
}
