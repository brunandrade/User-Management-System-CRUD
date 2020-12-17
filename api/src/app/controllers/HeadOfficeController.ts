import {Request, Response} from 'express'
import { getRepository } from 'typeorm';
import HeadOffice from '../models/HeadOffice'


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
}

export default new HeadOfficeController();