import {MigrationInterface, QueryRunner, Table, TableForeignKey} from "typeorm";

export class CreateTableUser1608140341059 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable( new Table({
            name: "User",
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
                    name:'Phone',
                    type: "varchar",    
                    isUnique: true            
                },
                {
                    name:'Email',
                    type: "varchar",    
                    isUnique: true                   
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
                {
                    name:'Password',
                    type: "varchar",                  
                },
                {
                    name:'HeadOfficeId',
                    type: "int",                  
                },
                {
                    name:'ProfileId',
                    type: "int",                  
                },
                {
                    name:'RoleId',
                    type: "int",                  
                },
                {
                    name: 'created_at',
                    type: 'timestamp',
                    default: 'now()'
                }

            ]
        }), true)

        await queryRunner.createForeignKey("User", new TableForeignKey({
            columnNames: ["HeadOfficeId"],
            referencedColumnNames: ["Id"],
            referencedTableName: "HeadOffice",
            onDelete: "CASCADE"
        }));

        await queryRunner.createForeignKey("User", new TableForeignKey({
            columnNames: ["ProfileId"],
            referencedColumnNames: ["Id"],
            referencedTableName: "Profile",
            onDelete: "CASCADE"
        }));

        await queryRunner.createForeignKey("User", new TableForeignKey({
            columnNames: ["RoleId"],
            referencedColumnNames: ["Id"],
            referencedTableName: "Role",
            onDelete: "CASCADE"
        }));
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('User');
    }

}
