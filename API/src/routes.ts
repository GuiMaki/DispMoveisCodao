import { Router } from "express";
//Users
import { CreateUserController } from "./controller/user/CreateUserController";
import { ListUserController } from "./controller/user/ListUserController";
import { UpdateUserController } from "./controller/user/UpdateUserController";
import { DeleteUserController } from "./controller/user/DeleteUserController";

//Sales
import { CreateSaleController } from "./controller/sale/CreateSaleController";
import { ListSaleController } from "./controller/sale/ListSaleController";
import { UpdateSaleController } from "./controller/sale/UpdateSaleController";
import { DeleteSaleController } from "./controller/sale/DeleteSaleController";

//Products
import { CreateProductController } from "./controller/product/CreateProductController";
import { ListProductController } from "./controller/product/ListProductController";
import { UpdateProductController } from "./controller/product/UpdateProductController";
import { DeleteProductController } from "./controller/product/DeleteProductController";

//Customer
import { CreateCustomerController } from "./controller/customer/CreateCustomerController";
import { ListCustomerController } from "./controller/customer/ListCustomerController";
import { UpdateCustomerController } from "./controller/customer/UpdateCustomerController";
import { DeleteCustomerController } from "./controller/customer/DeleteCustomerController";

//Category
import { CreateCategoryController } from "./controller/category/CreateCategoryController";
import { ListCategoryController } from "./controller/category/ListCategoryController";
import { UpdateCategoryController } from "./controller/category/UpdateCategoryController";
import { DeleteCategoryController } from "./controller/category/DeleteCategoryController";

/*---------------------------------------------------------------------------------------------------*/

//Users
const createUserController = new CreateUserController();
const listUserController = new ListUserController();
const updateUserController = new UpdateUserController();
const deleteUserController = new DeleteUserController();

//Sales
const createSaleController = new CreateSaleController();
const listSaleController = new ListSaleController();
const updateSaleController = new UpdateSaleController();
const deleteSaleController = new DeleteSaleController();

//Products
const createProductController = new CreateProductController();
const listProductController = new ListProductController();
const updateProductController = new UpdateProductController();
const deleteProductController = new DeleteProductController();

//Customer
const createCustomerController = new CreateCustomerController();
const listCustomerController = new ListCustomerController();
const updateCustomerController = new UpdateCustomerController();
const deleteCustomerController = new DeleteCustomerController();

//Category
const createCategoryController = new CreateCategoryController();
const listCategoryController = new ListCategoryController();
const updateCategoryController = new UpdateCategoryController();
const deleteCategoryController = new DeleteCategoryController();

/*---------------------------------------------------------------------------------------------------*/

const router = Router();
//Users
router.post("/users", createUserController.handle);
router.get("/users", listUserController.handle);
router.put("/users/:id", updateUserController.handle);
router.delete("/users/:id", deleteUserController.handle);

//Sales
router.post("/sales", createSaleController.handle);
router.get("/sales", listSaleController.handle);
router.put("/sales/:id", updateSaleController.handle);
router.delete("/sales/:id", deleteSaleController.handle)

//Products
router.post("/products", createProductController.handle);
router.get("/products", listProductController.handle);
router.put("/products/:id", updateProductController.handle);
router.delete("/products/:id", deleteProductController.handle);

//Customer
router.post("/customers", createCustomerController.handle);
router.get("/customers", listCustomerController.handle);
router.put("/customers/:id", updateCustomerController.handle);
router.delete("/customers/:id", deleteCustomerController.handle);

//Category
router.post("/categories", createCategoryController.handle);
router.get("/categories", listCategoryController.handle);
router.put("/categories/:id", updateCategoryController.handle);
router.delete("/categories/:id", deleteCategoryController.handle);

export {router}