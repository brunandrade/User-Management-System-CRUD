import User from '../../src/app/models/User'
import { getRepository } from 'typeorm';
import factory from '../utils/factories';
import request from 'supertest';
import app from '../../src/index';

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
        const userFactory = await factory.create("User");
  
        const response = await request(app).post("/register").send({
            Name: userFactory.name,
            CPF: userFactory.CPF,
            Phone: userFactory.Phone,
            Email: userFactory.Email,
            City: userFactory.City,
            CityId: userFactory.CityId,
            State: userFactory.State,
            StateId: userFactory.StateId,
            Password: userFactory.Password,
            HeadOfficeId: userFactory.HeadOfficeId,
            ProfileId: userFactory.ProfileId,
            RoleId: userFactory.RoleId,
          });

          expect(response.status).toBe(200);
    });
});