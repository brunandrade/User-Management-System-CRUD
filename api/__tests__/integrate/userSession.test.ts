//import User from '../../src/app/models/User'
//import factory from '../utils/factories';
import request from 'supertest';
import app from '../../src/server';

interface Hello {
    name: string
}

let meee : Hello = {
    name: 'me'
}

it('works', () => {
    expect(meee.name).toBe('me');
})

describe("User", () => {
    it("should create a new User", async () => {
       //const repository = getRepository(User);
       //const userFactory = await factory.create("User");

        // console.log(userFactory);
  
        // const response = await request(app).post("/User/Create").send({
        //     Name: userFactory.name,
        //     CPF: userFactory.CPF,
        //     Phone: userFactory.Phone,
        //     Email: userFactory.Email,
        //     City: userFactory.City,
        //     CityId: userFactory.CityId,
        //     State: userFactory.State,
        //     StateId: userFactory.StateId,
        //     Password: userFactory.Password,
        //     HeadOfficeId: userFactory.HeadOfficeId,
        //     ProfileId: userFactory.ProfileId,
        //     RoleId: userFactory.RoleId,
        //   });

        // console.log('alou');

        // const response = await request(app).post("/User/Create").send({
        //     Name: 'Bruna Teste',
        //     CPF: '01778903045',
        //     Phone: '71999509400',
        //     Email: 'brunar2d2@gmail.com',
        //     City: 'Maceio',
        //     CityId: '40',
        //     State: 'Alagoas',
        //     StateId: '79',
        //     Password: '123',
        //     HeadOfficeId: 1,
        //     ProfileId: 1,
        //     RoleId: 1,
        //   });

        //   console.log('tchau');
        //   expect(response.status).toBe(200);
    });
});