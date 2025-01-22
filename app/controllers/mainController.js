import dataMapper from "../dataMapper.js";
import errors from "../middleware/errors.js";

const mainController = {
    showHomepage: async (req, res) => {
        try 
        {
            const newCoffees = await dataMapper.getNewCoffees();

            res.render("index", {newCoffees});
        } 
        catch (error) 
        {
            errors[500](error);
        }
    },
    showCatalogpage: async (req, res) => {
        try 
        {
            const coffees = await dataMapper.getAllCoffees();

            res.render("catalog", {coffees});
        } 
        catch (error) 
        {
            errors[500](error);
        }
        
    },
    showDetailpage: async (req, res) => {
        try 
        {
            const id = req.params.id;

            const coffee = await dataMapper.getCoffee(id);

            if (!coffee)
                return errors[404](res);

            res.render("details", {coffee});
        } 
        catch (error) 
        {
            errors[500](error);
        }
        
    }
};

export default mainController;
