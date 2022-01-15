require('dotenv').config();

module.exports = {
    type: 'postgres',
    url: process.env.DATABASE_URL,
    synchronize: false,
    logging: false,
    entities: [
        'src/entities/**/*'
    ],
    migrations : [
        'src/migrations/**/*'
    ],
    cli: {
        entitiesDir: 'src/entities',
        migrationsDir: 'src/migrations'
    }
}