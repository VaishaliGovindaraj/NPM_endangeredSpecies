import express  from  "express";
import { allAnimalsArray } from "../data/species.js";

const groupPageRouter = express.Router({mergeParams:true});


groupPageRouter.get("/", (req, res) => {
    const groupName = req.params.groupName.toLowerCase();

    const validGroups = ["primates","big-cats","marine-mammals"];
    if (!validGroups.includes(groupName)) {
        return res.status(404).send("Category not found");
    }

    const filteredAnimals = allAnimalsArray.filter(
        (animal) => animal.groupName.replace(/ /g, "-").toLowerCase()=== groupName.replace(/ /g, "-").toLowerCase()
    );

    res.render("pages/home.ejs", {
        body_class:"home",
        main_content_page: groupName,
        header_text: groupName.toUpperCase(),
        welcome_text: `${groupName.toUpperCase()}`,
        animal_names: filteredAnimals
    });
});

export default groupPageRouter;