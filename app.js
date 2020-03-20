import express from "express";
import path from "path";
const app = express();
const port = 3000;


app.use('/assets',express.static(path.join(__dirname + '\\assets')));

app.get("/", (_, response) =>
    response.sendFile(path.join(__dirname + '\\index.html'))
);

app.listen(port,
    () => console.log(`Server running at http://localhost:${port}/`)
);