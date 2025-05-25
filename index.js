import express from "express";
import * as path from "path";
import {allAnimalsArray} from "./data/species.js"
import * as dotenv from "dotenv";
import groupPageRouter from "./routes/group_page.js";
import animalDetailsRouter from "./routes/animal_details.js";

const app = express();

const __dirname = path.resolve();

dotenv.config();
const PORT = process.env.PORT;

app.set("views", path.join(__dirname,"views"));
app.set("view engine","ejs");
app.use(express.static(path.join(__dirname,"public")))


app.get("/",(req,res) => {
    res.render("pages/home.ejs",{
        body_class : "home",
        header_text : "ENDANGERED SPECIES",
        main_content_page: "home",
        animal: allAnimalsArray,
        animal_names :allAnimalsArray
    })
})


app.use("/:groupName",groupPageRouter)
app.use("/:groupName/:animalName", animalDetailsRouter);
app.listen(PORT,() => console.log(`Listening on PORT : ${PORT}`));