import dataMapper from "../dataMapper.js";

const mainController = {
    showHomepage: async (req, res) => {
        const newCoffees = await dataMapper.getNewCoffees();

        res.render("index", {newCoffees});
    },
    showCatalogpage: async (req, res) => {
        const coffees = await dataMapper.getAllCoffees();

        res.render("catalog", {coffees});
    }
};

export default mainController;
