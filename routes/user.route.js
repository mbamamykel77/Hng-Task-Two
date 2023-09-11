import express from "express";

const router = express.Router();

import {createUser, getUser, updateUser, deleteUser} from "../controllers/user.js";

router.route("/").post(createUser);
router.route("/:id").get(getUser).put(updateUser).delete(deleteUser)





export {router};