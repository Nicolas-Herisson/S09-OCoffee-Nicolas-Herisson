import dataMapper from "../dataMapper.js";

const mainController = {
    showHomepage: async (req, res) => {
        const newCoffees = await dataMapper.getNewCoffees();

        res.render("index", {newCoffees});
    },
    showCatalogpage: async (req, res) => {
        const coffees = await dataMapper.getAllCoffees();

        res.render("catalog", {coffees});
    },
    showDetailpage: async (req, res) => {
        const id = req.params.id;

        const coffee = await dataMapper.getCoffee(id);

        res.render("details", {coffee});
    }
};

export default mainController;
