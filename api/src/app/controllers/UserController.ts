import {Request, Response} from 'express'
import { getRepository } from 'typeorm';
import User from '../models/User'
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import {isValidCPF, isValidEmail} from '../services/Validator'

import {SendConfirmEmail, SendResendEmail} from '../services/EmailService'

class UserController{
    async store(req : Request, res: Response){
        const repository = getRepository(User);
        const {Name, CPF ,Phone,Email,City, CityId, State,  StateId, Password, HeadOfficeId, ProfileId, RoleId} = req.body;

        const userEmail = await repository.findOne( { where: { Email } } );    
        const userPhone = await repository.findOne( { where: { Phone } } ); 
        const userCPF = await repository.findOne( { where: { CPF } } ); 
           
        if(userEmail){
          return res.status(409).send({
            Success: false,
            Message: "Já existe um usuário com este email"               
          });
        }       
        else if(userPhone){
          return res.status(409).send({
            Success: false,
            Message: "Já existe um usuário com este telefone"               
          });
        }
        else if(userCPF){
          return res.status(409).send({
            Success: false,
            Message: "Já existe um usuário com este CPF"               
          });
        }
        else if(!isValidCPF(CPF)){
          return res.status(400).send({
            Success: false,
            Message: "CPF Inválido."               
          });
        }
        else if(!isValidEmail(Email)){
          return res.status(400).send({
            Success: false,
            Message: "Email Inválido."               
          });
        }

        const user = repository.create({Name,CPF, Phone,Email,City, CityId, State,  StateId, Password, HeadOfficeId, ProfileId, RoleId});
        await repository.save(user);

        SendConfirmEmail(Email);
        
      return res.status(201).send({
        Success: true,
        Message: "Usuário criado com sucesso!",
        user: user
      });
      
    }

    async index(req: Request, res: Response){
        const repository = getRepository(User);     

        if(req.query === null || req.query === undefined){
          const users = await repository.find();   
          if(users.length == 0){
            return res.status(400).send({
              Success: false,
              Message: "Nenhum usuário encontrado"               
            });
          }
          else{
            return res.status(201).json(users); 
          }
        }
        else {
          const usersFilter = await repository.find({ where: req.query} );
          if(usersFilter.length  == 0){
            return res.status(400).send({
              Success: false,
              Message: "Nenhum usuário encontrado"               
            });
          }
          else{
            return res.status(201).json(usersFilter);
          }          
        }     
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

    async update(req : Request, res: Response){
      const repository = getRepository(User);
      const {Id} = req.params;
      const {Phone, Email} = req.body
      const user = await repository.findOne( Id );

      if(!user){
        return res.status(400).send({
          Success: false,
          Message: "Usuário não encontrado!"               
        });
      }

      if(Phone != null && Phone != user.Phone){
        const userPhone = await repository.findOne( { where: { Phone } } );   
        if(userPhone){
            return res.status(409).send({
              Success: false,
              Message: "Já existe um usuário com este telefone"               
            });
          }
      }
     
      if(Email != null && Email != user.Email){
        const userEmail = await repository.findOne( { where: { Email } } );    
        if(userEmail){
          return res.status(409).send({
            Success: false,
            Message: "Já existe um usuário com este email"               
          });
        }   
      }   

      const userResult = repository.merge(user, req.body);
      await repository.save(userResult);
      
    return res.status(201).send({
      Success: true,
      Message: "Usuário Atualizado com sucesso!",
      user: userResult
    });
  }

  async remove(req : Request, res: Response){
    const repository = getRepository(User);
    const {Id} = req.params;
    
    const user = await repository.findOne( Id );

    if(!user){
      return res.status(400).send({
        Success: false,
        Message: "Usuário não encontrado!"               
      });
    }

    await repository.remove(user);

      return res.status(201).send({
      Success: true,
      Message: "Usuário Removido com sucesso!",    
    });
  }

  async detail(req: Request, res: Response){
    const repository = getRepository(User); 
    const {Id} = req.params;    
    const user = await repository.findOne( { where: { Id } } );  

    if(user == null){
        return res.status(400).send({
          Success: false,
          Message: "Usuário não encontrado."               
        });
    }
    else{
        return res.status(201).json(user); 
    }
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

export default new UserController();