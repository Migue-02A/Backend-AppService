import pkg from 'pg'; // Usa la importación por defecto
const { Pool } = pkg; // Extrae el Pool del paquete

const pool = new Pool({
    user: 'citus',
    host: 'c-prueba-comos-db.22oxceqgj4oc6k.postgres.cosmos.azure.com',
    database: 'citus',
    password: 'Prueba1234.',
    port: 5432,
    ssl: {
        rejectUnauthorized: false, // Asegúrate de manejar esto adecuadamente en producción
    },
});

export default pool;
