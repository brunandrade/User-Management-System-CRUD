import * as nodemailer from 'nodemailer';

export const SendConfirmEmail = async (email:string) => {
    const transporter =  nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 465,
        secure: true,
        auth: {
            user : process.env.EMAIL,
            pass: process.env.EMAIL_PASSWORD
        }
     });

     transporter.sendMail({
        from:" User Management System <brunar2d2@gmail.com>",
        to: email,
        subject: "Seu Cadastro foi realizado com Sucesso!!",
        text: "Seu Cadastro foi realizado com Sucesso!!",
        html: "Seu Cadastro foi realizado com Sucesso!!"
    
    }).then(message => {
        console.log(message)
    }).catch(err =>{
        console.log(err);
    })
     
}


export const SendResendEmail = async (email:string) => {
    const transporter =  nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 465,
        secure: true,
        auth: {
            user : process.env.EMAIL,
            pass: process.env.EMAIL_PASSWORD
        }
     });

     transporter.sendMail({
        from:" User Management System <brunar2d2@gmail.com>",
        to: email,
        subject: "Senha redefinida com sucesso!!",
        text: "Senha redefinida com sucesso!!",
        html: "Senha redefinida com sucesso!!"
    
    }).then(message => {
        console.log(message)
    }).catch(err =>{
        console.log(err);
    })
     
}