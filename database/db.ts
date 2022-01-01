import { Sequelize } from "sequelize";

// Database config
const sequelize = new Sequelize({
    dialect: "postgres",
    username: "dhmjhqbblxsdyc",
    password:
        "7f2ec236f84568b59dc8b4115d4ece02dad9266813f3fe8f962c147eb7bf6f83",
    database: "d8tc93vrrcc90h",
    port: 5432,
    host: "ec2-52-70-205-234.compute-1.amazonaws.com",
    ssl: true,

    dialectOptions: {
        ssl: {
            require: true,
            rejectUnauthorized: false,
        },
    },
});

// Export
export { sequelize };
