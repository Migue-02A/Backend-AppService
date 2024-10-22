import pkg from 'pg';
const { Pool } = pkg; 

const pool = new Pool({
    user: 'citus',
    host: 'postgresql-pruebas.postgres.database.azure.com',
    database: 'postgres',
    password: 'Prueba1234',
    port: 5432,
    ssl: {
        rejectUnauthorized: false,
    },
});

export default pool;
