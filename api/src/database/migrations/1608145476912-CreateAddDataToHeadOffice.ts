import {MigrationInterface, QueryRunner} from "typeorm";

export class CreateAddDataToHeadOffice1608145476912 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`INSERT INTO HeadOffice ( Name, Description,City, CityId, State, StateId) values ('Central', 'HeadOffice Central', 'Salvador', 1, 'Bahia', 1);`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
