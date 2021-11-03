import { Router, Request, Response } from "express"
import { indexControllers } from "../controllers/index";

const router = Router();

router.get("/user", indexControllers.index);
router.post("/user/create", indexControllers.createUser);
router.put("/user/edit/:id", indexControllers.editUser);
router.delete("/user/delete/:id", indexControllers.deleteUser);

export default router;