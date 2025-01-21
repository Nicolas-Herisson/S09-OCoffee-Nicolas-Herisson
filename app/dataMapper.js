import client from "./client.js";

const dataMapper = {
    getNewCoffees: async () => {
        const sql = 'SELECT * FROM coffee LIMIT 3;';

        const result = await client.query(sql);

        return result.rows;
    },
    getAllCoffees: async () => {
        const sql = 'SELECT * FROM coffee;';

        const result = await client.query(sql);

        return result.rows;
    }
};

export default dataMapper;
