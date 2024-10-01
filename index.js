import express from 'express';
import cors from 'cors';
import pool from './db.js'; // Importa el pool de conexión

const app = express();

app.use(cors());

// Endpoint para obtener todos los productos
app.get("/", async (req, res) => {
    try {
        const result = await pool.query('SELECT * FROM productos'); // Asumiendo que tu tabla se llama 'productos'
        res.json(result.rows); // Envía los datos de los productos
    } catch (error) {
        console.error("Error al cargar los productos:", error);
        res.status(500).json({ message: "Error al cargar la información." });
    }
});

// Endpoint para obtener un producto específico
const getComprasCliente = async (req, res) => {
    try {
        const { idDelProducto } = req.query;
        console.log("idDelProducto:", idDelProducto);

        if (!idDelProducto) {
            return res.status(400).json({ message: "idDelProducto es requerido." });
        }

        const result = await pool.query('SELECT * FROM productos WHERE id_producto = $1', [idDelProducto]);
        
        if (result.rows.length === 0) {
            return res.status(404).json({ message: "Producto no encontrado." });
        }

        res.json(result.rows[0]); // Envía el producto encontrado
    } catch (error) {
        console.error("Error en getComprasCliente:", error);
        res.status(500).json({ message: "Error en el servidor." });
    }
};

app.get("/Producto", getComprasCliente);

const port = process.env.PORT || 4000;
app.listen(port, () => {
    console.log("Server is listening on:", port);
});