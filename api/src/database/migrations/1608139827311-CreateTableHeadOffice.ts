import {MigrationInterface, QueryRunner,Table} from "typeorm";

export class CreateTableHeadOffice1608139827311 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable( new Table({
            name: "HeadOffice",
            columns:[
                {
                    name:'Id',
                    type: "int",
                    isPrimary: true,
                    isGenerated: true,
                    generationStrategy: 'increment',
                },
                {
                    name:'Name',
                    type: "varchar",                  
                },
                {
                    name:'Description',
                    type: "varchar",                  
                },
                {
                    name:'City',
                    type: "varchar",                  
                },
                {
                    name:'CityId',
                    type: "int",                  
                },
                {
                    name:'State',
                    type: "varchar",                  
                },
                {
                    name:'StateId',
                    type: "int",                  
                },
            ]
        }), true)
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('HeadOffice');
    }

}
