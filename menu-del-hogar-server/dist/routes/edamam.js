"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const edamamRouter = express_1.default.Router();
const edamamRoot = 'https://api.edamam.com';
edamamRouter.use((0, cors_1.default)({
    origin: '*',
    methods: ['GET', 'POST'],
}));
edamamRouter.get('/', (req, res) => {
    console.log(req.socket.remoteAddress);
    res.json({ name: 'Hello Edamam' });
});
edamamRouter.get('/v2', (req, res) => {
    res.json({ name: 'Hello Edamam V2' });
});
edamamRouter.get('/:search', (req, res) => {
    res.json(req.recipesEdamam);
});
edamamRouter.get('/v2/:searchV2', (req, res) => {
    res.json(req.recipesEdamamV2);
});
edamamRouter.param('search', (req, res, next, search) => {
    fetch(`${edamamRoot}/search?q=${search}&app_id=${process.env.EDAMAM_APP_ID}&app_key=${process.env.EDAMAM_API_KEY}`)
        .then(response => response.json())
        .then(response => {
        req.recipesEdamam = response;
        next();
    });
});
edamamRouter.param('searchV2', (req, res, next, search) => {
    console.log(`${edamamRoot}/api/recipes/v2?q=${search}&app_id=${process.env.EDAMAM_APP_ID}&app_key=${process.env.EDAMAM_API_KEY}`);
    fetch(`${edamamRoot}/api/recipes/v2?type=public&q=${search}&app_id=${process.env.EDAMAM_APP_ID}&app_key=${process.env.EDAMAM_API_KEY}`)
        .then(response => response.json())
        .then(response => {
        console.log(response);
        req.recipesEdamamV2 = response;
        next();
    });
});
exports.default = edamamRouter;
