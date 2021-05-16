const express = require("express");
const router = express.Router();

const User = require("../models/User");
const auth = require("../middleware/auth");
const { findByIdAndUpdate } = require("../models/User");

//get a user
router.get("/", auth, async (req, res) => {
  const id = req.user.id;

  try {
    const user = await User.findById(id).select("-password");
    if (!user) {
      return res.status(400).json({ msg: "Invalid user" });
    }

    res.json(user);
  } catch (err) {
    console.error(err);
    return res.status(500).json({ msg: "Server error" });
  }
});

router.put("/", auth, async (req, res) => {
  const id = req.user.id;
  const { username, bio, location, website } = req.body;
  try {
    const user = await User.findOne({ username });
    if (user && user._id.toString() !== id) {
      return res.status(400).json({ msg: "Username already taken" });
    }
    const update = { username, bio, location, website };
    const userUpdate = await User.findByIdAndUpdate(
      id,
      { $set: update },
      { new: true }
    );
    res.json(userUpdate);
  } catch (err) {
    console.error(err);
    return res.status(500).json({ msg: "Server error" });
  }
});

module.exports = router;
