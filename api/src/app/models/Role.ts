import {Entity, PrimaryGeneratedColumn, Column} from 'typeorm';

@Entity('Role')
class Role {

    @PrimaryGeneratedColumn('increment')   
    Id: number;

    @Column()
    Name: string;
    @Column()
    Description: string;
}

export default Role;