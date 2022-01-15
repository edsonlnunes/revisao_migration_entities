import {
  MigrationInterface,
  QueryRunner,
  Table,
  TableForeignKey,
} from "typeorm";

export class CreateTablePurchases1642201211618 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "purchases",
        columns: [
          {
            name: "uid",
            type: "UUID",
            isPrimary: true,
            isNullable: false,
          },
          {
            name: "amount",
            type: "decimal",
            scale: 2,
            precision: 6,
            isNullable: false,
          },
          {
            name: "date",
            type: "timestamp",
            isNullable: false,
          },
          {
            name: "uid_user",
            type: "uuid",
            isNullable: false,
          },
          {
            name: "created_at",
            type: "timestamp",
            isNullable: false,
          },
          {
            name: "updated_at",
            type: "timestamp",
            isNullable: false,
          },
        ],
        foreignKeys: [
          new TableForeignKey({
            name: "purchases_users",
            columnNames: ["uid_user"],
            referencedTableName: "users",
            referencedColumnNames: ["uid"],
          }),
        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("purchases", true, true, true);
  }
}
