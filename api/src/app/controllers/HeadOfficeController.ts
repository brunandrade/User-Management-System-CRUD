import {Request, Response} from 'express'
import { getRepository, getManager, getConnection } from 'typeorm';
import HeadOffice from '../models/HeadOffice'
import User from '../models/User'


class HeadOfficeController{
    async store(req : Request, res: Response){
        const repository = getRepository(HeadOffice);
        const {Id, Name, Description , City, CityId, State,  StateId} = req.body;

        const headOfficeExists = await repository.findOne( { where: { Name } } );
        if(headOfficeExists){
            return res.status(409).send({
                Success: false,
                Message: "Já existe um HeadOffice com este nome"               
              });
        }
        const headOffice = repository.create({Id, Name, Description ,City, CityId, State,  StateId});
        await repository.save(headOffice);

        
      return res.status(201).send({
        Success: true,
        Message: "HeadOffice criado com sucesso!",
        headOffice: headOffice
      });      
    }

    async index(req : Request, res: Response){
      const repository = getRepository(HeadOffice);
      const headOfficers = await repository.find()

      if(!headOfficers){
          return res.status(404).send({
              Success: false,
              Message: "Nenhum HeadOffice encontrado"               
            });
      }

      return res.status(201).json(headOfficers);
  }

  async update(req : Request, res: Response){
    const repository = getRepository(HeadOffice);
    const {Id} = req.params;
    const {Name} = req.body
    const headOffice = await repository.findOne( Id );

    if(!headOffice){
      return res.status(404).send({
        Success: false,
        Message: "Usuário não encontrado!"               
      });
    }

    if(Name != null && Name != headOffice.Name){
      const headOfficeName = await repository.findOne( { where: { Name } } );   
      if(headOfficeName){
          return res.status(409).send({
            Success: false,
            Message: "Já existe um HeadOffice com este nome"               
          });
        }
    }
     

    const headOfficeResult = repository.merge(headOffice, req.body);
    await repository.save(headOfficeResult);
    
    return res.status(201).send({
      Success: true,
      Message: "HeadOffice Atualizado com sucesso!",
      headOffice: headOfficeResult
    });
  }

  async remove(req : Request, res: Response){
    const repository = getRepository(HeadOffice);
    const {Id} = req.params;
    
    const headOffice = await repository.findOne( Id );

    if(!headOffice){
      return res.status(404).send({
        Success: false,
        Message: "Usuário não encontrado!"               
      });
    }

    const query = await repository.manager.query(`SELECT Id, Name FROM User WHERE HeadOfficeId = ${Id}`);
    console.log(query);

    if(query != null || query != []){
      return res.status(400).send({
        Success: false,
        Message: "HeadOffice esta sendo utilizado por usuários."               
      });
    }

    await repository.remove(headOffice);

    return res.status(201).send({
      Success: true,
      Message: "HeadOffice Removido com sucesso!",    
    });
  }

}

export default new HeadOfficeController();