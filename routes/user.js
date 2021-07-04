const express = require("express");
const router = express.Router();

const User = require("../models/User");
const Follows = require("../models/Follows");
const getUserId = require("../middleware/getUserId");
const auth = require("../middleware/auth");
const { cloudinary } = require("../config/cloudinary");

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
  const {
    username,
    bio,
    location,
    website,
    newAvatar,
    newBanner,
    removeBanner,
  } = req.body;
  try {
    const check = await User.findOne({ username });
    if (check && check._id.toString() !== id) {
      return res.status(400).json({ msg: "Username already taken" });
    }

    const user = await User.findById(id);

    const update = { username, bio, location, website };

    if (removeBanner) {
      if (user.bannerId) {
        await cloudinary.uploader.destroy(user.bannerId, {
          upload_preset: "tweeter_app",
        });

        update.banner = null;
        update.bannerId = null;
      }
    }

    if (newAvatar) {
      const uploadedResponse = await cloudinary.uploader.upload(newAvatar, {
        upload_preset: "tweeter_app",
      });

      if (user.cloudinaryId) {
        await cloudinary.uploader.destroy(user.cloudinaryId, {
          upload_preset: "tweeter_app",
        });
      }

      update.avatar = uploadedResponse.url;
      update.cloudinaryId = uploadedResponse.public_id;
    }

    if (newBanner) {
      const uploadedResponse = await cloudinary.uploader.upload(newBanner, {
        upload_preset: "tweeter_app",
      });

      if (user.bannerId) {
        await cloudinary.uploader.destroy(user.bannerId, {
          upload_preset: "tweeter_app",
        });
      }

      update.banner = uploadedResponse.url;
      update.bannerId = uploadedResponse.public_id;
    }

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

router.get("/profile/:id", getUserId, async (req, res) => {
  const id = req.params.id;
  const follower = req.user.id;
  try {
    const profile = await User.findById(id);
    var following = false;
    if (!profile) {
      return res.status(400).json({ msg: "Not a user" });
    }

    if (follower) {
      const checkFollows = await Follows.findOne({ follower, following: id });
      if (checkFollows) {
        following = true;
      }
    }

    res.json({ ...profile._doc, following });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ msg: "Server error" });
  }
});

module.exports = router;
