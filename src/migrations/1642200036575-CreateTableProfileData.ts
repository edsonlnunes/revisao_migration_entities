import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateTableProfileData1642200036575 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "profile_data",
        columns: [
          {
            name: "uid",
            type: "UUID",
            isPrimary: true,
            isNullable: false,
          },
          {
            name: "name",
            type: "varchar",
            length: "50",
            isNullable: false,
          },
          {
            name: "email",
            type: "varchar",
            length: "100",
            isNullable: false,
          },
          {
            name: "document",
            type: "varchar",
            length: "14",
            isNullable: false,
            isUnique: true,
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
    await queryRunner.dropTable("profile_data", true, true, true);
  }
}
