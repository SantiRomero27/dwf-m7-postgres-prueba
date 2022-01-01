import { DataTypes } from "sequelize";
import { sequelize } from "./db";

// Create a Model
export const Product = sequelize.define("Product", {
    price: {
        type: DataTypes.FLOAT,
        allowNull: false,
    },

    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },

    stock: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
});
