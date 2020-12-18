import {Request, Response} from 'express'
import { getRepository } from 'typeorm';
import HeadOffice from '../models/HeadOffice'
import { cnpj } from 'cpf-cnpj-validator'; 


class HeadOfficeController{
    async store(req : Request, res: Response){
        const repository = getRepository(HeadOffice);
        const {Id, Name, Description, CNPJ, City, CityId, State,  StateId} = req.body;

        const headOfficeName = await repository.findOne( { where: { Name } } );
        const headOfficeCNPJ = await repository.findOne( { where: { CNPJ } } );

        if(headOfficeName){
            return res.status(409).send({
                Success: false,
                Message: "Já existe um HeadOffice com este nome"               
              });
        }
        else if(headOfficeCNPJ){
          return res.status(409).send({
              Success: false,
              Message: "Já existe um HeadOffice com este nome"               
            });
        }
        else if(!cnpj.isValid(CNPJ)){
          return res.status(400).send({
            Success: false,
            Message: "CNPJ Inválido."               
          });
        }

        const headOffice = repository.create({Id, Name, Description, CNPJ, City, CityId, State,  StateId});
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
    const {Name, CNPJ} = req.body
    const headOffice = await repository.findOne( Id );

    if(!headOffice){
      return res.status(404).send({
        Success: false,
        Message: "Usuário não encontrado!"               
      });
    }

    if((Name != null && Name != headOffice.Name) && (CNPJ != null && CNPJ != headOffice.CNPJ)){
      const headOfficeName = await repository.findOne( { where: { Name } } );   
      const headOfficeCNPJ = await repository.findOne( { where: { CNPJ } } );

      if(headOfficeName){
          return res.status(409).send({
            Success: false,
            Message: "Já existe um HeadOffice com este nome"               
          });
        }
        else if(headOfficeCNPJ){
          return res.status(409).send({
              Success: false,
              Message: "Já existe um HeadOffice com este CNPJ"               
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
    query.map(function(num: any) {
      console.log("teste");
      console.log(num)
      if(num != null || num != []){
        return res.status(400).send({
          Success: false,
          Message: "HeadOffice esta sendo utilizado por usuários."               
        });
      }
    });
    await repository.remove(headOffice);

    return res.status(201).send({
      Success: true,
      Message: "HeadOffice Removido com sucesso!",    
    });
  }

}

export default new HeadOfficeController();