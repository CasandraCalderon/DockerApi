import express, {Application} from "express";
import morgan from "morgan";
import {connect} from "./database";
import routes from "../routes";
import cors from "cors";
import path from 'path';
class App {
    readonly port: number;
    private app: Application;
    constructor() {
        this.port = +process.env.PORT! || 8000;
        this.app = express();
        this.settings();
        this.middlewares();
        this.routes();
        this.multer();
        
        const dbUser = process.env.DB_USER!;
        const dbPass = process.env.DB_PASS!;
        const dbHost = process.env.DB_HOST!;
        const dbPort = process.env.DB_PORT!;
        const dbName = process.env.DB_NAME!;
        connect(dbUser, dbPass, dbHost, dbPort, dbName);
    }

    private settings() {
        this.app.set("port", process.env.PORT || 8000);
        this.app.use(cors());
    }

    private middlewares() {
        this.app.use(morgan("dev"));
        this.app.use(express.urlencoded({ extended: false }));
        this.app.use(express.json());
    }

    private routes() {
        this.app.use("/api", routes);
    }

    public multer() {
        this.app.use('/uploads', express.static(path.resolve('uploads')));
    }


    

    start() {
        this.app.listen(this.port, () => {
            console.log(`Server running in Port ${this.port}`);
        });
    }
}
export default App;