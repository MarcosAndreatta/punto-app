import { Storage } from "@google-cloud/storage";
import path from "path";
const serviceKey = path.join(__dirname, "./keys.json");
const storage = new Storage({
    keyFilename: serviceKey,
    projectId: "punto-app-375603"
})
const bucket = storage.bucket("punto-app-bucket")
export default bucket