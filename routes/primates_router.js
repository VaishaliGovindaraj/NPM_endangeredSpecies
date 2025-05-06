import express from "express";
import {primatesArray } from "../data/species.js";

const primatesRouter = express();

primatesRouter.get("/",(req,res) => {
    res.render("pages/home.ejs",{   
        body_class_name:"mammals",
        header_class:"home",
        main_content_page : "primates",
        welcome_text : "Mammals",
        animal_names : primatesArray
    })
})

primatesRouter.get("/echidna",(req,res) => {
    let echidna = mammalArray[0];
    res.render("pages/home.ejs",{
        welcome_text: "Mammals - Echidna",
        body_class_name:"mammals",
        main_content_page : "animals",
        animal:echidna,
        animal_names : primatesArray
    })
})

primatesRouter.get("/tasmanian-devil",(req , res) => {
    let tasmanian_devil = mammalArray[1];
    res.render("pages/home.ejs",{
        welcome_text: "Mammals - Tasmanian Devil",
        main_content_page : "animals",
        animal: tasmanian_devil,
        animal_names : primatesArray
    })
})

primatesRouter.get("/quokka",(req,res) => {
    let quokka = mammalArray[2];
    res.render("pages/home.ejs",{
        welcome_text: "Mammals - Quokka",
        main_content_page : "animals",
        animal: quokka,
        animal_names : primatesArray
    })
})

export default primatesRouter;
