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

const asyncHandler = (fn: Function) => (req: any, res: any, next: any) => {
    Promise.resolve(fn(req, res, next)).catch(next);
};

router.post("", asyncHandler(createUserController.handle));
router.get("", asyncHandler(listUserController.handle));
router.get("/:id", asyncHandler(selectUserController.handle));
router.put("/:id", asyncHandler(updateUserController.handle));
router.delete("/:id", asyncHandler(deleteUserController.handle));

export default router;
