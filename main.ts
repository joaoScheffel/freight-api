import express, {Express} from "express"
import EnvConfig from "./src/configs/Env.config";
import {errorMiddleware} from "./src/middlewares/Error.middleware";
import {AppDataSource} from "./src/configs/DbConnect.config";

EnvConfig.validateVariables()
const app: Express = express()

app.use(express.json())
app.use(express.urlencoded())

AppDataSource.initialize()
    .then(() => {
        console.log("Data Source has been initialized!")
    })
    .catch((err) => {
        console.error("Error during Data Source initialization", err)
    })

app.get("/", async (req, res) => {
    res.send("Hello World")
})

app.use(errorMiddleware)

const port = 8080;
app.listen(port, '0.0.0.0', () => {
    console.info(`Server started in http://localhost:${port}`);
});