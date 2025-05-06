import express from "express";
import * as path from "path";
import {allAnimalsArray} from "./data/species.js"
import primatesRouter from "./routes/primates_router.js";

const app = express();
const PORT =4000;
const __dirname = path.resolve();

app.set("views", path.join(__dirname,"views"));
app.set("view engine","ejs");
app.use(express.static(path.join(__dirname,"public")))


app.get("/",(req,res) => {
    res.render("pages/home.ejs",{
        body_class : "home",
        header_text : "ENDANGERED SPECIES",
        main_content: "home",
        animal: allAnimalsArray,
        animal_names :allAnimalsArray
    })
})

app.use("/primates",primatesRouter);
// app.use("/big-cats",bigCatsRouter);
// app.use("/marine-mammals",marineMammalsRouter);
app.listen(PORT,() => console.log(`Listening on PORT : ${PORT}`));