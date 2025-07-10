const express = require("express");
const router = express.Router();
const {
  getNurses,
  getAllNurses,
  profileUpdate,
} = require("../controllers/nurseController");
router.get("/get-nurses", getNurses);
router.get("/get-allNurses", getAllNurses);
router.put("/profile-update", profileUpdate);

module.exports = router;
