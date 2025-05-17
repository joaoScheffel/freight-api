import express, {Express} from "express"

const app: Express = express()

app.use(express.json())
app.use(express.urlencoded())

app.get("/", async (req, res) => {
    res.send("Hello World")
})

const port = 8080;
app.listen(port, '0.0.0.0', () => {
    console.info(`Server started in http://localhost:${port}`);
});