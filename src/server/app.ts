import express, {Application} from "express";
import morgan from "morgan";
import {connect} from "./database";
import routes from "../routes"
class App {
    readonly port: number;
    private app: Application;
    constructor() {
        this.port = +process.env.PORT!;
        this.app = express();
        this.middlewares();
        this.routes();
        const dbUser = process.env.DB_USER!;
        const dbPass = process.env.DB_PASS!;
        const dbHost = process.env.DB_HOST!;
        const dbPort = process.env.DB_PORT!;
        const dbName = process.env.DB_NAME!;
        connect(dbUser, dbPass, dbHost, dbPort, dbName);
    }

    private middlewares() {
        this.app.use(morgan("dev"));
        this.app.use(express.json());
        this.app.use(express.urlencoded({ extended: false }));
    }

    private routes() {
        this.app.use("/api", routes);
    }

    start() {
        this.app.listen(this.port, () => {
            console.log(`Server running in Port ${this.port}`);
        });
    }
}
export default App;