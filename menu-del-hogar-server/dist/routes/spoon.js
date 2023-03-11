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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv = __importStar(require("dotenv"));
dotenv.config();
const spoonRouter = express_1.default.Router();
const spoonRoot = 'https://api.spoonacular.com';
spoonRouter.get('/', (req, res) => {
    res.send('Hello Spoonacular');
});
spoonRouter.route('/:id')
    .get((req, res) => {
    res.send('Hello Spoonacular');
})
    .put((req, res) => {
})
    .delete((req, res) => {
});
spoonRouter.param('id', (req, res, next, id) => __awaiter(void 0, void 0, void 0, function* () {
    let recInformation;
    let recInstructions;
    let recResponse;
    function getInformation() {
        return __awaiter(this, void 0, void 0, function* () {
            return fetch(`${spoonRoot}/recipes/${id}/information?apiKey=${process.env.SPOONACULAR_API_KEY}`)
                .then(response => response.json())
                .then(response => {
                recInformation = response;
            })
                .catch(() => console.log("Error, instructions could not be fetched."));
        });
    }
    function getInstructions() {
        return __awaiter(this, void 0, void 0, function* () {
            return fetch(`${spoonRoot}/recipes/${id}/analyzedInstructions?apiKey=${process.env.SPOONACULAR_API_KEY}`)
                .then(response => response.json())
                .then(response => {
                recInstructions = response;
            })
                .catch(() => console.log("Error, instructions could not be fetched."));
        });
    }
    yield getInformation();
    yield getInstructions();
    req.recipe = {
        information: recInformation,
        instructions: recInstructions,
    };
    next();
}));
exports.default = spoonRouter;
