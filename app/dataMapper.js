import { query } from "express";
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
    },
    getSortedCoffee: async(colName, order) => {
        const sql = `SELECT * FROM coffee ORDER BY ${colName} ${order};`
        
        const result = await client.query(sql);

        return result.rows;
    },
    getColumnNoDups: async(colName) => {
        const sql = `SELECT ${colName} FROM coffee GROUP BY ${colName};`

        const result = await client.query(sql);

        return result.rows;
    },
    getFilteredCoffees: async(value, colName) => {
        const sql = {
            text: `SELECT * FROM coffee WHERE coffee.${colName} = $1;`,
            values: [`${value}`]
        }

        const result = await client.query(sql);

        return result.rows;
    },
};

export default dataMapper;
