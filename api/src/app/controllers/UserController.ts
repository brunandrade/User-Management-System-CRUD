import {Request, Response} from 'express'
import { getRepository } from 'typeorm';
import User from '../models/User'
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

class UserController{
    async store(req : Request, res: Response){
        const repository = getRepository(User);
        const {Name, Phone,Email,City, CityId, State,  StateId, Password, HeadOfficeId, ProfileId, RoleId} = req.body;

        const userExists = await repository.findOne( { where: { Email } } );
        if(userExists){
          return res.status(409).send({
            Success: false,
            Message: "Já existe um usuário com este email"               
          });
        }
        const user = repository.create({Phone,Email,City, CityId, State,  StateId, Password, HeadOfficeId, ProfileId, RoleId, Name});
        await repository.save(user);

        
      return res.status(201).send({
        Success: true,
        Message: "Usuário criado com sucesso!",
        user: user
      });
      
    }

    async index(req : Request, res: Response){
        const repository = getRepository(User);
        const users = await repository.find()

        if(!users){
            return res.status(404).send({
                Success: false,
                Message: "Nenhum usuário encontrado"               
              });
        }

        return res.status(201).json(users);
    }

    async login(req : Request, res: Response){
        const repository = getRepository(User);
        const {Email, Password} = req.body;

        const user = await repository.findOne( { where: { Email } } );
        if(!user){
            return res.status(401).send({
                Success: false,
                Message: "Nenhum usuário encontrado"               
              });
        }

        const isValidPassword = await bcrypt.compare(Password, user.Password);
        if(!isValidPassword){
            return res.status(401).send({
                Success: false,
                Message: "Senha Incorreta"               
              });
        }
       
        const token = jwt.sign({Id: user.Id}, 'secret', {expiresIn:'1d'});
        
      return res.status(201).send({
        Success: true,
        user: user,
        token: token
      });
      
    }
}

export default new UserController();