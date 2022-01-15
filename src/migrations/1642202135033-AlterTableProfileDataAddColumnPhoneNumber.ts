import { MigrationInterface, QueryRunner, TableColumn } from "typeorm";

export class AlterTableProfileDataAddColumnPhoneNumber1642202135033
  implements MigrationInterface
{
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumn(
      "profile_data",
      new TableColumn({
        name: "phone_number",
        type: "varchar",
        length: "11",
        isNullable: true,
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropColumn("profile_data", "phone_number");
  }
}
