import {Request, Response} from 'express'
import { getRepository } from 'typeorm';
import HeadOffice from '../models/HeadOffice'
import {isValidCNPJ} from '../services/Validator'


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
        else if(!isValidCNPJ(CNPJ)){
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
      
      if(req.query === null || req.query === undefined){
        const headOfficers = await repository.find();   
        if(headOfficers.length == 0){
          return res.status(400).send({
            Success: false,
            Message: "Nenhum HeadOffice encontrado"               
          });
        }
        else{
          return res.status(201).json(headOfficers); 
        }
      }
      else {
        const headOfficersFilter = await repository.find({ where: req.query} );
        if(headOfficersFilter.length  == 0){
          return res.status(400).send({
            Success: false,
            Message: "Nenhum HeadOffice encontrado"               
          });
        }
        else{
          return res.status(201).json(headOfficersFilter);
        }          
      }   
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

  async detail(req: Request, res: Response){
    const repository = getRepository(HeadOffice); 
    const {Id} = req.params;    
    const headOffice = await repository.findOne( { where: { Id } } );  

    if(headOffice == null){
        return res.status(400).send({
          Success: false,
          Message: "HeadOffice não encontrado."               
        });
    }
    else{
        return res.status(201).json(headOffice); 
    }
  }

}

export default new HeadOfficeController();