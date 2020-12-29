import {Request, Response} from 'express'
import { getRepository } from 'typeorm';
import User from '../models/User'
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import {SendResendEmail} from '../services/EmailService'

class SessionController{
    
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
            return res.status(400).send({
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

  async changePassword(req : Request, res: Response){
    const repository = getRepository(User);
    const {Email, Password} = req.body
    const user = await repository.findOne( { where: { Email  } } ); 

    if(!user){
      return res.status(400).send({
        Success: false,
        Message: "Usuário não encontrado!"               
      });
    }

    const userResult = repository.merge(user, {Password});
    await repository.save(userResult);
    SendResendEmail(Email);
    
    return res.status(201).send({
      Success: true,
      Message: "Senha atualizada com sucesso!",
      user: userResult
    });
  }
}

export default new SessionController();