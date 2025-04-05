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

router.post("", createCustomerController.handle);
router.get("", listCustomerController.handle);
router.get("/:id", selectCustomerController.handle);
router.put("/:id", updateCustomerController.handle);
router.delete("/:id", deleteCustomerController.handle);

export default router;