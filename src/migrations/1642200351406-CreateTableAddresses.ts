import {
  MigrationInterface,
  QueryRunner,
  Table,
  TableForeignKey,
} from "typeorm";

export class CreateTableAddresses1642200351406 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "addresses",
        columns: [
          {
            name: "uid",
            type: "UUID",
            isPrimary: true,
            isNullable: false,
          },
          {
            name: "street",
            type: "varchar",
            length: "150",
            isNullable: false,
          },
          {
            name: "city",
            type: "varchar",
            length: "100",
            isNullable: false,
          },
          {
            name: "state",
            type: "varchar",
            length: "2",
            isNullable: false,
          },
          {
            name: "zip_code",
            type: "varchar",
            length: "8",
            isNullable: false,
          },
          {
            name: "uid_profile_data",
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
            name: "addresses_profile_data",
            columnNames: ["uid_profile_data"],
            referencedTableName: "profile_data",
            referencedColumnNames: ["uid"],
          }),
        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("addresses", true, true, true);
  }
}
