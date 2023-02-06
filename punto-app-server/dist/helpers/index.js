"use strict";
// import { util } from "@google-cloud/storage/build/src/nodejs-common";
// import gc from "../config";
// const bucket = gc.bucket("punto-app-bucket")
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const uuid_1 = require("uuid");
const storage_1 = require("@google-cloud/storage");
const path_1 = __importDefault(require("path"));
class MulterGoogleCloudStorage {
    setBlobFile(req, file) {
        const extension = file.mimetype.split("/")[1].split(";")[0];
        const filename = `${(0, uuid_1.v4)()}_${file.originalname || `.${extension}`}`;
        this.blobfile.filename = filename
            .replace(/^\.+/g, "")
            .replace(/^\/+/g, "")
            .replace(/\r|\n| /g, "_");
        return true;
    }
    constructor() {
        this.blobfile = {
            filename: ""
        };
        this.gcsStorage = new storage_1.Storage({
            projectId: "punto-app-375603",
            keyFilename: path_1.default.join(__dirname, "../config/keys.json")
        });
        this.gcsBucket = this.gcsStorage.bucket("punto-app-bucket");
    }
    _handleFile(req, file, callback) {
        if (this.setBlobFile(req, file)) {
            const blobName = this.blobfile.filename;
            const blob = this.gcsBucket.file(blobName);
            const blobStream = blob.createWriteStream();
            file.stream
                .pipe(blobStream)
                .on("finish", () => {
                callback(null, { filename: blob.publicUrl(), size: blob.metadata.size });
            });
        }
    }
    _removeFile(req, file, callback) {
        if (this.setBlobFile(req, file)) {
            const blobName = this.blobfile.filename;
            const blob = this.gcsBucket.file(blobName);
            blob.delete();
        }
    }
}
exports.default = MulterGoogleCloudStorage;
