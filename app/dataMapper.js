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
    getTableColumnsName: async() => {
        const sql = ` SELECT COLUMN_NAME FROM INFORMATION_SCHEMA.COLUMNS WHERE TABLE_NAME = N'coffee' OFFSET 1;`

        const result = await client.query(sql);

        return result.rows;
    },
    addProduct: async(product) => {
        const sql = {
            text: `INSERT INTO coffee (name, description, reference, origin, price, spec, available) VALUES ($1, $2, $3, $4, $5, $6, $7);`,
            values: [`${product.name}`, `${product.description}`, `${product.reference}`, `${product.origin}`, `${product.price}`, `${product.spec}`, `${product.available}`]
        }

        await client.query(sql);
    }
};

export default dataMapper;
