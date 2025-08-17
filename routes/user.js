const express = require('express');
const router = express.Router();
const Auth = require('../models/User')


let success;

router.post("/create-user", async (req, res) => {
  try {
    const { username, password } = req.body;

    const user = await Auth.create({
      username: username,
      password: password,
    });

    const data = {
      success: true,
      user: {
        id: user.id,
      },
    };

    res.json(data);
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: "Failed to create user",
      error: error.message, // optional, for debugging
    });
  }
});




module.exports = router; 