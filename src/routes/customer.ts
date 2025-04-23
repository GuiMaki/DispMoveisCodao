import { Router } from 'express';

import { CreateCustomerController } from "../controller/customer/CreateCustomerController";
import { ListCustomerController } from "../controller/customer/ListCustomerController";
import { UpdateCustomerController } from "../controller/customer/UpdateCustomerController";
import { DeleteCustomerController } from "../controller/customer/DeleteCustomerController";
import { SelectCustomerController } from "../controller/customer/SelectCustomerController";

const createCustomerController = new CreateCustomerController();
const listCustomerController = new ListCustomerController();
const updateCustomerController = new UpdateCustomerController();
const deleteCustomerController = new DeleteCustomerController();
const selectCustomerController = new SelectCustomerController();

const router = Router();

const asyncHandler = (fn: Function) => (req: any, res: any, next: any) => {
    Promise.resolve(fn(req, res, next)).catch(next);
};

router.post("", asyncHandler(createCustomerController.handle));
router.get("", asyncHandler(listCustomerController.handle));
router.get("/:id", asyncHandler(selectCustomerController.handle));
router.put("/:id", asyncHandler(updateCustomerController.handle));
router.delete("/:id", asyncHandler(deleteCustomerController.handle));

export default router;