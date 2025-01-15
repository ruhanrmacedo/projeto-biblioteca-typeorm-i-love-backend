import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateLivros1736896774520 implements MigrationInterface {
  async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "books",
        columns: [
          {
            name: "id",
            isPrimary: true,
            type: "serial",
          },
          {
            name: "title",
            type: "varchar",
            isNullable: false,
          },
          {
            name: "description",
            type: "text",
          },
          {
            name: "publication_date",
            type: "date",
          },
          {
            name: "isbn",
            type: "varchar",
            isNullable: false,
          },
          {
            name: "page_count",
            type: "int",
          },
          {
            name: "language",
            type: "varchar",
          },
          {
            name: "created_at",
            type: "timestamp",
            default: `'now()'`,
          },
          {
            name: "updated_at",
            type: "timestamp",
            default: `'now()'`,
          },
        ],
      }),
      true
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("books");
  }
}
