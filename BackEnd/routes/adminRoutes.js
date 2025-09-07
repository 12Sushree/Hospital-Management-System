const express = require("express");
const router = express.Router();
const {
  getUsers,
  deleteUser,
  addDepartment,
  deleteDepartment,
  getDepartment,
  getCount,
} = require("../controllers/adminController");
router.get("/get-users", getUsers);
router.delete("/delete-user/:id", deleteUser);
router.get("/get-count", getCount);
module.exports = router;
