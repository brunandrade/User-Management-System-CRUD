import { cpf, cnpj } from 'cpf-cnpj-validator'; 
import * as EmailValidator from 'email-validator';

export const isValidCPF = async (value:string) => {
    return cpf.isValid(value);
}

export const isValidCNPJ = async (value:string) => {
    return cnpj.isValid(value);
}

export const isValidEmail = async (value:string) => {
    return EmailValidator.validate(value);
}