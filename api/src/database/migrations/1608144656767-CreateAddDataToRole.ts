import {MigrationInterface, QueryRunner} from "typeorm";

export class CreateAddDataToRole1608144656767 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`INSERT INTO Role (Id, Name, Description) values (1,'Admnistrador(a)', 'Admnistrador(a) do HeadOffice');`);
        await queryRunner.query(`INSERT INTO Role (Id, Name, Description) values (2,'Gestor(a)', 'Gestor(a) do HeadOffice');`);
        await queryRunner.query(`INSERT INTO Role (Id, Name, Description) values (3,'Desenvolvedor(a)', 'Desenvolvedor(a) do HeadOffice');`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
