const express = require("express");
const router = express.Router();

const { createPost } = require("../controllers/createPost");
const { createLike } = require("../controllers/createLike");
const { createComment } = require("../controllers/createComment");
const { getPost } = require("../controllers/getPost");


//define API route
router.post("/createPost", createPost);
router.post("/createLike", createLike);
router.post("/createComment", createComment);
router.get("/getPost", getPost);


module.exports = router;
