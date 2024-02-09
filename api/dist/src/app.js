"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config");
const express_1 = __importDefault(require("express"));
const AboutRoutes = __importStar(require("./routes/about"));
const ResultsRoutes = __importStar(require("./routes/results"));
const TestRoutes = __importStar(require("./routes/test"));
const UserRoutes = __importStar(require("./routes/user"));
const cors = require("cors");
const app = (0, express_1.default)();
app.use(cors());
app.use(express_1.default.static(__dirname + "/public"));
app.get("/", (req, res) => {
    res.send("Hello World!");
});
app.get('/user', UserRoutes.router);
app.use(AboutRoutes.router);
app.use(ResultsRoutes.router);
app.use(TestRoutes.router);
app.use(UserRoutes.router);
exports.default = app;