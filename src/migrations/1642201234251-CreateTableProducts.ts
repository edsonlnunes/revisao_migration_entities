import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateTableProducts1642201234251 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "products",
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
            name: "name",
            type: "varchar",
            length: "100",
            isNullable: false,
          },
          {
            name: "category",
            type: "varchar",
            length: "100",
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
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("products", true, true, true);
  }
}
