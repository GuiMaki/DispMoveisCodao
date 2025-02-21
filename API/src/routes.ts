import { Router } from "express";
import { CreateUserController } from "./controller/user/CreateUseController";

const createUseController = new CreateUserController();

const router = Router();
router.post("/users", createUseController.handle);

export {router}