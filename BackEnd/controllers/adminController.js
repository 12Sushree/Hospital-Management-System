const User = require("../models/user");

exports.getUsers = async (req, res) => {
  try {
    const users = await User.find({ role: "patient" });
    res.json(users);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
exports.deleteUser = async (req, res) => {
  try {
    const deletedUser = await User.findByIdAndDelete(req.params.id);
    res.json(deletedUser);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getCount = async (req, res) => {
  try {
    const patientcou = await User.countDocuments({ role: "patient" }).exec();
    const doccou = await User.countDocuments({ role: "doctor" }).exec();
    const nursecou = await User.countDocuments({ role: "nurse" }).exec();

    res.json({
      patientcou,
      doccou,
      nursecou,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
