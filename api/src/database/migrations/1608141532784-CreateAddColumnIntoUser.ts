import {MigrationInterface, QueryRunner,TableColumn} from "typeorm";

export class CreateAddColumnIntoUser1608141532784 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.addColumn("User", new TableColumn({
            name: "Name",
            type: "varchar"
        }));
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropColumn("User", "Name");
    }

}
