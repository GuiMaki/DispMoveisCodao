import { Router } from "express";
import { CreateUserController } from "./controller/user/CreateUserController";
import { CreateProductController } from "./controller/product/CreateProductController";

const createUserController = new CreateUserController();
const createProductController = new CreateProductController();

const router = Router();
router.post("/users", createUserController.handle);

const router = Router();
router.post("/producta", createProductController.handle);

export {router}