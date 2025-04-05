import { Router } from "express";

import { CreateUserController } from "../controller/user/CreateUserController";
import { ListUserController } from "../controller/user/ListUserController";
import { UpdateUserController } from "../controller/user/UpdateUserController";
import { DeleteUserController } from "../controller/user/DeleteUserController";
import { SelectUserController } from "../controller/user/SelectUserController";

const createUserController = new CreateUserController();
const listUserController = new ListUserController();
const updateUserController = new UpdateUserController();
const deleteUserController = new DeleteUserController();
const selectUserController = new SelectUserController();

const router = Router();

router.post("", createUserController.handle);

router.get("", listUserController.handle);

router.get("/:id", selectUserController.handle);

router.put("/:id", updateUserController.handle);

router.delete("/:id", deleteUserController.handle);

export default router;
