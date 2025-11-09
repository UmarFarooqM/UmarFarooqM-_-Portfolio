// routes/contactRoutes.js
const express = require("express");
const { addContact } = require("../controllers/contactControllers");

const contactRouter = express.Router();

// POST route to handle form submission
contactRouter.post("/add", addContact);

module.exports = contactRouter;
