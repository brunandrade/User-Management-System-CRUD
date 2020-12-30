const { factory } = require("factory-girl");
import faker from 'faker'
import User from '../../src/app/models/User'
import { cpf } from '@phuocng/fake-numbers';

factory.define("User", User, {
    Name: faker.name.findName,
    CPF: cpf.fake(),
    Phone: faker.phone,
    Email: faker.internet.email,
    City: faker.address.city,
    CityId: faker.random.number(3),
    State: faker.address.state,
    StateId: faker.random.number(3),
    Password: faker.internet.password,
    HeadOfficeId: 1,
    ProfileId: 1,
    RoleId: 1,
  });

export default factory;