import { Router } from "express";

import UserRouter from "./routes/user";
import SaleRouter from "./routes/sale";
import ProductRouter from "./routes/product";
import CustomerRouter from "./routes/customer";
import CategoryRouter from "./routes/category";

import { AuthenticationController } from "./controller/authentication/AuthenticationController";
import ensureAuthenticated from "./middleware/EnsureAuthenticated";

const authenticationController = new AuthenticationController();

const router = Router();

router.post("/auth", authenticationController.handle)
router.use(ensureAuthenticated)

router.use("/users", UserRouter);

router.use("/sales", SaleRouter);

router.use("/products", ProductRouter);

router.use("/customers", CustomerRouter);

router.use("/categories", CategoryRouter);


export {router}