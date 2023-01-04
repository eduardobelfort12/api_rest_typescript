import { Request, Response } from "express";
import { subjectRepository } from "../repositories/subjectRepository";

export class SubjectController {

    async create(req: Request, res: Response) {
           const { name } = req.body
           
           if(!name) {
            return res.status(400).json({message: "O campo nome é obrigatório"})
           }
            try {
                const newSubject = subjectRepository.create({
                    name
                })
                console.log(newSubject)
                return res.json({message: "Disciplina inserida com sucesso!"})
            } catch (error) {
                console.log(error)
                return res.status(500).json({message: "Internal server Error!"})
            }

    }

}