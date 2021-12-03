const express = require("express");
const Router = express.Router();
const userctrl = require("../controllers/userctrl");

Router.get("/getall",  userctrl.GetAllUsers);

Router.post("/create",  userctrl.CreateUsr);

module.exports = Router;

