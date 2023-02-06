"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const storage_1 = require("@google-cloud/storage");
const path_1 = __importDefault(require("path"));
const serviceKey = path_1.default.join(__dirname, "./keys.json");
const storage = new storage_1.Storage({
    keyFilename: serviceKey,
    projectId: "punto-app-375603"
});
const bucket = storage.bucket("punto-app-bucket");
exports.default = bucket;
