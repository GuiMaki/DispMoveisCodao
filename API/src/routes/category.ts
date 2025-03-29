import { Router } from "express";

import { CreateCategoryController } from "../controller/category/CreateCategoryController";
import { ListCategoryController } from "../controller/category/ListCategoryController";
import { UpdateCategoryController } from "../controller/category/UpdateCategoryController";
import { DeleteCategoryController } from "../controller/category/DeleteCategoryController";

const createCategoryController = new CreateCategoryController();
const listCategoryController = new ListCategoryController();
const updateCategoryController = new UpdateCategoryController();
const deleteCategoryController = new DeleteCategoryController();

const router = Router();

router.post("", createCategoryController.handle);
router.get("", listCategoryController.handle);
router.put("/:id", updateCategoryController.handle);
router.delete("/:id", deleteCategoryController.handle);

export default router;