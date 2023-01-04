import { AppDataSource } from "../data-source";
import { Subject } from "../entities/Subjects";

export const subjectRepository = AppDataSource.getRepository(Subject)