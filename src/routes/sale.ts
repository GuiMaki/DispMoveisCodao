import { Router } from "express";

import { CreateSaleController } from "../controller/sale/CreateSaleController";
import { ListSaleController } from "../controller/sale/ListSaleController";
import { UpdateSaleController } from "../controller/sale/UpdateSaleController";
import { DeleteSaleController } from "../controller/sale/DeleteSaleController";
import { SelectSaleController } from "../controller/sale/SelectSaleController";

const createSaleController = new CreateSaleController();
const listSaleController = new ListSaleController();
const updateSaleController = new UpdateSaleController();
const deleteSaleController = new DeleteSaleController();
const selectSaleController = new SelectSaleController();

const router = Router();

router.post("", createSaleController.handle);
router.get("", listSaleController.handle);
router.get("/:id", selectSaleController.handle.bind(selectSaleController));
router.put("/:id", updateSaleController.handle);
router.delete("/:id", deleteSaleController.handle);

export default router;