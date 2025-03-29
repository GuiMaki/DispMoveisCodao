import { Router } from "express";

import { CreateProductController } from "../controller/product/CreateProductController";
import { ListProductController } from "../controller/product/ListProductController";
import { UpdateProductController } from "../controller/product/UpdateProductController";
import { DeleteProductController } from "../controller/product/DeleteProductController";

const createProductController = new CreateProductController();
const listProductController = new ListProductController();
const updateProductController = new UpdateProductController();
const deleteProductController = new DeleteProductController();

const router = Router();

router.post("", createProductController.handle);

router.get("", listProductController.handle);

router.put("/:id", updateProductController.handle);

router.delete("/:id", deleteProductController.handle);

export default router;