
import { Router } from "express";
// import { getproduct } from "./product.controller.js";
import * as product_controller from "../Products/products.controller.js"


const router = Router();


router.post("/addproduct", product_controller.addproduct);
router.delete("/deleteproduct", product_controller.deleteproduct);
router.patch("/updateProduct", product_controller.updateProduct);
router.get("/getallproduct", product_controller.getallproduct)
router.get("/greaterthan3000" , product_controller.greaterthan3000)

export default router;
