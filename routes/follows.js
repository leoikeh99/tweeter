const express = require("express");
const router = express.Router();

const Follows = require("../models/Follows");
const User = require("../models/User");
const auth = require("../middleware/auth");

router.post("/", auth, async (req, res) => {
  const follower = req.user.id;
  const following = req.body.id;
  try {
    const user = await User.findById(following);
    if (!user) {
      return res.status(400).json({ msg: "Not a user" });
    }

    const follows = new Follows({ follower, following });
    const follow = await follows.save();

    res.json(follow);
  } catch (err) {
    console.error(err);
    return res.status(500).json({ msg: "Server error" });
  }
});

module.exports = router;
