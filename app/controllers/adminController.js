import dataMapper from '../dataMapper.js'
import errors from '../middleware/errors.js'

const adminController = {
    showAdminPage: async (req, res) => {
        try 
        {
            const colsName = await dataMapper.getTableColumnsName();

            res.status(200).render("admin", {colsName});
        } 
        catch (error) 
        {
            errors[500](error);
        }
        
    },
    addProduct: async (req, res) => {
        try 
        {
            const product = req.query;
            const colsName = await dataMapper.getTableColumnsName();

            await dataMapper.addProduct(product);

            res.status(200).render("admin", {colsName});
        } 
        catch (error) 
        {
            errors[500](error);
        }
        
    },
}

export default adminController;