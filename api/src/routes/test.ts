import express, { Request, Response } from "express";
const router = express.Router();

const testController = require("../controllers/test");

router.get("/test/alignment", testController.startTest);

export { router };
