"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const edamamRouter = express_1.default.Router();
edamamRouter.get('/', (req, res) => {
    res.send('Hello Edamam');
});
edamamRouter.get('/v2', (req, res) => {
    res.send('Hello Edamam V2');
});
exports.default = edamamRouter;
