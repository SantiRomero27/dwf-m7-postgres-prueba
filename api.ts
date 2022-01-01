import * as express from "express";
import { Product } from "./database/Product";

// Express server config
const app = express();
app.use(express.json());
const PORT = process.env.PORT || 3000;

// Get all products endpoint
app.get("/products", async (req, res) => {
    const allProducts = await Product.findAll();

    res.json({
        products: allProducts,
    });
});

// Get a product endpoint
app.get("/products/:productId", async (req, res) => {
    // Get the product id sent
    const { productId } = req.params;

    // Search the product
    const productSearch = await Product.findAll({
        where: {
            id: productId,
        },
    });

    // Search result
    const searchResult =
        productSearch.length > 0
            ? productSearch[0].get()
            : "Product not found!";

    res.json({
        product: searchResult,
    });
});

// Create a product endpoint
app.post("/products", async (req, res) => {
    // Get the product attributes
    const { price, name, stock } = req.body;

    // Create the product
    await Product.create({
        name,
        price,
        stock,
    });

    res.json({
        message: "Product created properly!",
    });
});

// Delete all products endpoint
app.delete("/products", async (req, res) => {
    await Product.destroy({ truncate: true, restartIdentity: true });

    res.json({
        message: "Products table restarted!",
    });
});

// Delete a single product enpoint
app.delete("/products/:productId", async (req, res) => {
    // Get the product id sent
    const { productId } = req.params;

    // Delete the product
    await Product.destroy({
        where: {
            id: productId,
        },
    });

    res.json({
        message: "Product deleted successfully!",
    });
});

// Update a product
app.patch("/products/:productId", async (req, res) => {
    // Get the product id sent, and the body
    const { productId } = req.params;
    const body = req.body;

    // Update the product
    await Product.update(body, {
        where: {
            id: productId,
        },
    });

    res.json({
        message: `Product ${productId} updated successfully!`,
    });
});

// Listen to requests
app.listen(PORT, () => {
    console.log(`> App listening to Port ${PORT}!`);
});
