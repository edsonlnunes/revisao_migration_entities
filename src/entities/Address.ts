import { Column, Entity, JoinColumn, ManyToOne } from "typeorm";
import { CoisasEmComum } from "./CoisasEmComum";
import { ProfileData } from "./ProfileData";

@Entity({ name: "addresses" })
export class Address extends CoisasEmComum {
  @Column()
  street!: string;

  @Column()
  city!: string;

  @Column()
  state!: string;

  @Column({ name: "zip_code" })
  zipCode!: string;

  @Column({ name: "uid_profile_data" })
  uidProfileData!: string;

  @ManyToOne(() => ProfileData, (entity) => entity.addresses)
  @JoinColumn({ name: "uid_profile_data", referencedColumnName: "uid" })
  profile!: ProfileData;
}
