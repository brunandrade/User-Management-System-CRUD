import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateTableRole1608137441257 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable( new Table({
            name: "Role",
            columns:[
                {
                    name:'Id',
                    type: "int",
                    isPrimary: true
                },
                {
                    name:'Name',
                    type: "varchar",                  
                },
                {
                    name:'Description',
                    type: "varchar",                  
                }
            ]
        }), true)
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('Role')
    }

}
