import "dotenv/config";
import express, {Router} from "express";
import { Express } from "express";
import { errorMiddleware } from "./AppError";
import GeneralMiddleware from "./generalMiddleware";
class Server {
    private port: number;
    private app: Express;
    constructor (port = 8080) {
        this.port = process.env.PORT ? parseInt(process.env.PORT) : port;
        this.app = express();
        this.app.listen(this.port, () => {console.log("Server started at", this.port)});
        new GeneralMiddleware(this.app);
    }
    public addRoute(endpoint: string, router: Router) {
        this.app.use(endpoint, router);
    }
    public addCatchAllRoute (handler: any) {
        this.app.use("*", handler)
    }
    public useErrorHandler () {
        this.app.use(errorMiddleware)
    }
};
export default Server