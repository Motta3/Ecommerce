import { MigrationInterface, QueryRunner, TableColumn } from "typeorm";

export class UpdateClientAddCPF1644259299445 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumn(
      "clientes",
      new TableColumn({
        name: "cpf",
        type: "varchar",
        isNullable: false,
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("clientes");
  }
}