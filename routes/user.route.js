import express from "express";

const router = express.Router();

import {createUser, getUser, updateUser, deleteUser} from "../controllers/user.js";

router.route("/").post(createUser).get(getUser);
router.route("/:id").put(updateUser).delete(deleteUser)





export {router};