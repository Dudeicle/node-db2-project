// Update with your config settings.

module.exports = {
	// database config for development environment
	// added useNullAsDefault: true
	// update filename pathing to point to database file
	development: {
		client: "sqlite3",
		connection: {
			filename: "./data/cars.db3", // update to point to database file
		},
		useNullAsDefault: true,
	},
	// database config for staging/testing environment
	staging: {
		client: "postgresql",
		connection: {
			database: "my_db",
			user: "username",
			password: "password",
		},
		pool: {
			min: 2,
			max: 10,
		},
		migrations: {
			tableName: "knex_migrations",
		},
	},
	// database config for production environment
	production: {
		client: "postgresql",
		connection: {
			database: "my_db",
			user: "username",
			password: "password",
		},
		pool: {
			min: 2,
			max: 10,
		},
		migrations: {
			tableName: "knex_migrations",
		},
	},
};
