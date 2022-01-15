import {
  MigrationInterface,
  QueryRunner,
  Table,
  TableForeignKey,
} from "typeorm";

export class CreateTableUsers1642200537992 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "users",
        columns: [
          {
            name: "uid",
            type: "UUID",
            isPrimary: true,
            isNullable: false,
          },
          {
            name: "username",
            type: "varchar",
            length: "50",
            isNullable: false,
          },
          {
            name: "password",
            type: "varchar",
            length: "200",
            isNullable: false,
          },
          {
            name: "enable",
            type: "bool",
            default: true,
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
            name: "users_profile_data",
            columnNames: ["uid_profile_data"],
            referencedTableName: "profile_data",
            referencedColumnNames: ["uid"],
          }),
        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("users", true, true, true);
  }
}
