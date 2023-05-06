import { Router } from "express";
import * as user_controller from "../User/user.controller.js";

const router = Router();

router.post("/addUser", user_controller.addUser);
router.put("/updateUser", user_controller.updateUser)
router.delete("/deleteUser", user_controller.deleteUser);
router.get("/searchUser", user_controller.searchUser);
router.post("/searchByIds", user_controller.searchByIds)
router.get("/getallUser", user_controller.getallUser)
router.get("/getAllUsersWithProducts" , user_controller.getAllUsersWithProducts)











export default router; 