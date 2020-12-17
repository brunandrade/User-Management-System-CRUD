
import {Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, OneToOne, JoinColumn, BeforeInsert, BeforeUpdate} from 'typeorm';
import bcrypt from 'bcryptjs';
// import HeadOffice from './HeadOffice'
// import Profile from './Profile'
// import Role from './Role'

@Entity('User')
class User {

    @PrimaryGeneratedColumn()   
    Id: number;

    @Column()
    Name: string;

    @Column()
    Phone: string;

    @Column()
    Email: string;

    @Column()
    City: string;

    @Column()
    CityId: number;

    @Column()
    State: string;

    @Column()
    StateId: number;

    @Column()
    Password: string;

    @CreateDateColumn()
    created_at: Date;

    @Column()
    HeadOfficeId: number;

    @Column()
    ProfileId: number;

    @Column()
    RoleId: number;

    @BeforeInsert()
    @BeforeUpdate()
    hashPassword(){
        this.Password = bcrypt.hashSync(this.Password, 5);
    }

    // @OneToOne( type => HeadOffice)
    // HeadOfficeId: HeadOffice;

    // @OneToOne(type => HeadOffice)
    // @JoinColumn({ name: 'HeadOfficeId' })
    // HeadOffice: HeadOffice

    // @OneToOne( type => Profile )
    // ProfileId: Profile;

    // @OneToOne( type => Role )
    // RoleId: Role;
}

export default User;