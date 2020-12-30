//import User from '../../src/app/models/User'
//import factory from '../utils/factories';
import request from 'supertest';
import app from '../../src/server';

interface User {
    name: string,
    cpf: string,
    phone: string,
    city: string,
    cityId: number,
    state: string,
    stateId: number,
    password: string,
    headOfficeId: number,
    profileId: number,
    roleId: number,
}

describe("User", () => {
//     it("should create a new User", async () => {
//        //const repository = getRepository(User);
//        //const userFactory = await factory.create("User");

//         // console.log(userFactory);
  
//         const response = await request(app).post("/User/Create").send({
//             Name: userFactory.name,
//             CPF: userFactory.CPF,
//             Phone: userFactory.Phone,
//             Email: userFactory.Email,
//             City: userFactory.City,
//             CityId: userFactory.CityId,
//             State: userFactory.State,
//             StateId: userFactory.StateId,
//             Password: userFactory.Password,
//             HeadOfficeId: userFactory.HeadOfficeId,
//             ProfileId: userFactory.ProfileId,
//             RoleId: userFactory.RoleId,
//           });

//         console.log('alou');

//         const response = await request(app).post("/User/Create").send({
//             Name: 'Bruna Teste',
//             CPF: '01778903045',
//             Phone: '71999509400',
//             Email: 'brunar2d2@gmail.com',
//             City: 'Maceio',
//             CityId: '40',
//             State: 'Alagoas',
//             StateId: '79',
//             Password: '123',
//             HeadOfficeId: 1,
//             ProfileId: 1,
//             RoleId: 1,
//           });

//           console.log('tchau');
//           expect(response.status).toBe(200);
//     });

    it("should access the system with Login route", async () => {
        const response = await request(app)
        .post(`/User/Login`)
        .send({
          Email: 'bruna.card.andrade@gmail.com',
          Password: '123',
        });
      
        expect(response.status).toEqual(200);
     });
});