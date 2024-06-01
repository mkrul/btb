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
const body_parser_1 = __importDefault(require("body-parser"));
const path_1 = __importDefault(require("path"));
const AboutRoutes = __importStar(require("./routes/about"));
const ResultsRoutes = __importStar(require("./routes/results"));
const TestRoutes = __importStar(require("./routes/test"));
const UserRoutes = __importStar(require("./routes/user"));
const DogsRoutes = __importStar(require("./routes/dogs"));
const cors = require("cors");
const app = (0, express_1.default)();
const origin = process.env.NODE_ENV === 'production' ? 'https://ban-this-breed-b3bc9b835a36.herokuapp.com' : 'http://localhost:3000';
const corsOptions = {
    origin,
    optionsSuccessStatus: 200
};
app.use(cors(corsOptions));
app.use((req, res, next) => {
    res.setHeader("Content-Security-Policy", "script-src 'self'; style-src 'self'");
    next();
});
app.use(express_1.default.json());
app.use(body_parser_1.default.json());
app.use(body_parser_1.default.urlencoded({ extended: true }));
app.use(AboutRoutes.router);
app.use(DogsRoutes.router);
app.use(ResultsRoutes.router);
app.use(TestRoutes.router);
app.use(UserRoutes.router);
// app.use(express.static(path.resolve('client/build')))
if (process.env.NODE_ENV === 'production') {
    app.use(express_1.default.static('client/build'));
    app.get('*', (req, res) => {
        res.sendFile(path_1.default.resolve(__dirname, 'client', 'build', 'index.html'));
    });
}
exports.default = app;
