import { Router } from "express";

import { CreateRatingController } from "../controller/rating/CreateRatingController";
import { ListRatingController } from "../controller/rating/ListRatingController";
import { UpdateRatingController } from "../controller/rating/UpdateRatingController";
import { DeleteRatingController } from "../controller/rating/DeleteRatingController";
import { SelectRatingController } from "../controller/rating/SelectRatingController";

const createRatingController = new CreateRatingController();
const listRatingController = new ListRatingController();
const updateRatingController = new UpdateRatingController();
const deleteRatingController = new DeleteRatingController();
const selectRatingController = new SelectRatingController();

const router = Router();

const asyncHandler = (fn: Function) => (req: any, res: any, next: any) => {
    Promise.resolve(fn(req, res, next)).catch(next);
};

router.post("", asyncHandler(createRatingController.handle));
router.get("", asyncHandler(listRatingController.handle));
router.get("/:id", asyncHandler(selectRatingController.handle));
router.put("/:id", asyncHandler(updateRatingController.handle));
router.delete("/:id", asyncHandler(deleteRatingController.handle));

export default router;