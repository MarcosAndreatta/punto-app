import { Request } from "express";
import { v4 as uuid } from "uuid";
import { Bucket, Storage } from "@google-cloud/storage";
import multer from "multer";
import { ParamsDictionary } from "express-serve-static-core";
import { ParsedQs } from "qs";
import path from "path";

export default class MulterGoogleCloudStorage implements multer.StorageEngine {
    private gcsBucket: Bucket;
    private gcsStorage: Storage;
    private blobfile = {
        filename: ""
    };
    private setBlobFile(req: Request, file: Express.Multer.File) {
        const extension = file.mimetype.split("/")[1].split(";")[0];
        const filename = `${uuid()}_${file.originalname || `.${extension}`}`;
        this.blobfile.filename = filename
            .replace(/^\.+/g, "")
            .replace(/^\/+/g, "")
            .replace(/\r|\n| /g, "_");
        return true
    }
    constructor () {
        this.gcsStorage = new Storage({
            projectId: "punto-app-server-377223",
            keyFilename: path.join(__dirname, "../config/storageKey.json")
        });
        this.gcsBucket = this.gcsStorage.bucket("punto-server-app-bucket")
    }
    _handleFile(
        req: Request, 
        file: Express.Multer.File, 
        callback: (error?: Error | null, info?: Partial<Express.Multer.File> | undefined) => void): void {
        if (this.setBlobFile(req, file)) {
            const blobName = this.blobfile.filename;
            const blob = this.gcsBucket.file(blobName);
            const blobStream = blob.createWriteStream();
            file.stream
            .pipe(blobStream)
            .on("finish", () => {
                callback(null, {filename: blob.publicUrl(), size: blob.metadata.size})
            })
        }        
    }
    _removeFile(req: Request<ParamsDictionary, any, any, ParsedQs, Record<string, any>>, file: Express.Multer.File, callback: (error: Error | null) => void): void {
        if (this.setBlobFile(req, file)) {
            const blobName = this.blobfile.filename;
            const blob = this.gcsBucket.file(blobName);
            blob.delete()

        }
    }
}