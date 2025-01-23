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
            const specs = await dataMapper.getColumnNoDups('spec');
            const origins = await dataMapper.getColumnNoDups('origin');

            res.render("catalog", {coffees, filteredCoffees: coffees, specs, origins});
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
    },
    showOriginpage: async (req,res) => {
        try 
        {
            const origin = req.query.originFilter;
            const coffees = await dataMapper.getAllCoffees();
            const filteredCoffees = await dataMapper.getFilteredCoffees(origin, 'origin');
            const specs = await dataMapper.getColumnNoDups('spec');
            const origins = await dataMapper.getColumnNoDups('origin');

            res.render("catalog", {coffees, filteredCoffees, specs, origins});
        } 
        catch (error) 
        {
            errors[500](error);
        }
    },
    showSpecpage: async (req,res) => {
        try 
        {
            const spec = req.query.specFilter;
 
            const coffees = await dataMapper.getAllCoffees();
            const filteredCoffees = await dataMapper.getFilteredCoffees(spec, 'spec');
            const specs = await dataMapper.getColumnNoDups('spec');
            const origins = await dataMapper.getColumnNoDups('origin');

            res.render("catalog", {coffees, filteredCoffees, specs, origins});
        } 
        catch (error) 
        {
            errors[500](error);
        }
    },
    showSortpage: async (req,res) => {
        try 
        {
            const param = req.query.sortSelector;
            const colName = param.split(" ")[0];
            const order = param.split(" ")[1].toUpperCase();


            const coffees = await dataMapper.getAllCoffees();
            const sortedCoffees = await dataMapper.getSortedCoffee(colName, order);

            res.render("catalog", {coffees,sortedCoffees});
        } 
        catch (error) 
        {
            errors[500](error);
        }
    },
    showContactPage: async (req, res) => {
        try 
        {
            res.render("contact");
        } 
        catch (error) 
        {
            errors[500](error);
        }
    },
};

export default mainController;
