import { Router } from "express";

import { CreateSaleController } from "../controller/sale/CreateSaleController";
import { ListSaleController } from "../controller/sale/ListSaleController";
import { UpdateSaleController } from "../controller/sale/UpdateSaleController";
import { DeleteSaleController } from "../controller/sale/DeleteSaleController";

const createSaleController = new CreateSaleController();
const listSaleController = new ListSaleController();
const updateSaleController = new UpdateSaleController();
const deleteSaleController = new DeleteSaleController();

const router = Router();

router.post("", createSaleController.handle);

router.get("", listSaleController.handle);

router.put("/:id", updateSaleController.handle);

router.delete("/:id", deleteSaleController.handle);

export default router;