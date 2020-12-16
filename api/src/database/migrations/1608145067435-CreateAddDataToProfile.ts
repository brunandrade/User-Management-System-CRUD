import {MigrationInterface, QueryRunner} from "typeorm";

export class CreateAddDataToProfile1608145067435 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`INSERT INTO Profile (Id, Name, Description) values (1,'Admin', 'Admin');`);
        await queryRunner.query(`INSERT INTO Profile (Id, Name, Description) values (2,'Manager', 'Manger');`);
        await queryRunner.query(`INSERT INTO Profile (Id, Name, Description) values (3,'Developer', 'Developer');`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
