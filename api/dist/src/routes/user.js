"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
exports.router = router;
const userController = require("../controllers/user");
// GET /user/:ipAddress
// router.post("/", userController.createUser);
router.get("/api/user", userController.getUser);
router.put("/api/user/:userId", express_1.default.json(), userController.updateUser);
