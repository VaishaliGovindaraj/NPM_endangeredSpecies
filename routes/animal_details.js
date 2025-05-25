import express from "express";
import { allAnimalsArray } from "../data/species.js";

const animalDetailsRouter = express.Router({mergeParams: true});

animalDetailsRouter.get("/",(req,res) => {
    
    const { groupName, animalName } = req.params;

    const foundAnimal = allAnimalsArray.find(
        (animal) =>
            animal.groupName.replace(/ /g, "-").toLowerCase() === groupName.replace(/ /g, "-").toLowerCase() &&
            animal.name.replace(/ /g, "-").toLowerCase() === animalName.replace(/ /g, "-").toLowerCase() 
    );

    if (!foundAnimal) {
        return res.status(404).send("Animal not found");
    }

    const filteredAnimals = allAnimalsArray.filter(animal => animal.groupName === groupName);

    res.render("pages/home.ejs", {
        animal: foundAnimal,
        body_class:"home",
        header_text:`${groupName.toUpperCase()} - ${foundAnimal.name.toUpperCase()}`,
        main_content_page: "animals",
        welcome_text: `${groupName} - ${foundAnimal.name}`,
        animal_names: filteredAnimals
    });
});

export default animalDetailsRouter;
