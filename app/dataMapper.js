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
    },
    getCoffee: async (id) => {
        const sql = {
            text: `SELECT * FROM coffee WHERE $1=coffee.id;`,
            values: [id]
        };

        const result = await client.query(sql);

        return result.rows[0];
    }
};

export default dataMapper;
