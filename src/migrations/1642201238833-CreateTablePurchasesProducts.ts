import {
  MigrationInterface,
  QueryRunner,
  Table,
  TableColumn,
  TableForeignKey,
} from "typeorm";

export class CreateTablePurchasesProducts1642201238833
  implements MigrationInterface
{
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "purchases_products",
        columns: [
          {
            name: "uid",
            type: "UUID",
            isPrimary: true,
            isNullable: false,
          },
          {
            name: "uid_product",
            type: "uuid",
            isNullable: false,
          },
          {
            name: "uid_purchase",
            type: "uuid",
            isNullable: false,
          },
          {
            name: "created_at",
            type: "timestamp",
            isNullable: false,
          },
          new TableColumn({
            name: "updated_at",
            type: "timestamp",
            isNullable: false,
          }),
        ],
        foreignKeys: [
          new TableForeignKey({
            name: "purchases_products_products",
            columnNames: ["uid_product"],
            referencedTableName: "products",
            referencedColumnNames: ["uid"],
          }),
          new TableForeignKey({
            name: "purchases_products_purchases",
            columnNames: ["uid_purchase"],
            referencedTableName: "purchases",
            referencedColumnNames: ["uid"],
          }),
        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("purchases_products", true, true, true);
  }
}
