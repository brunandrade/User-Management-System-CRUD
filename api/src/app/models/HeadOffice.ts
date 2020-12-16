import {Entity, PrimaryGeneratedColumn, Column} from 'typeorm';

@Entity('HeadOffice')
class HeadOffice {

    @PrimaryGeneratedColumn('increment')   
    Id: number;

    @Column()
    Name: string;

    @Column()
    Description: string;

    @Column()
    City: string;

    @Column()
    CityId: number;

    @Column()
    State: string;

    @Column()
    StateId: number;

}

export default HeadOffice;