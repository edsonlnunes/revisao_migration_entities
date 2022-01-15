import {
  BaseEntity,
  BeforeInsert,
  BeforeUpdate,
  Column,
  PrimaryColumn,
} from "typeorm";
import { v4 as uuid } from "uuid";

export class CoisasEmComum extends BaseEntity {
  @PrimaryColumn()
  uid!: string;

  @Column({ name: "created_at" })
  createdAt?: Date;

  @Column({ name: "updated_at" })
  updatedAt?: Date;

  @BeforeInsert()
  beforeCreate() {
    this.uid = uuid();
    this.updatedAt = new Date();
    this.createdAt = new Date();
  }

  @BeforeUpdate()
  beforeUpdate() {
    this.updatedAt = new Date();
  }
}
