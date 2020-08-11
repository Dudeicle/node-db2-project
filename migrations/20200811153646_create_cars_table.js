exports.up = function (knex) {
	return knex.schema.createTable("cars", (tbl) => {
		// primary key
		tbl.increments("id");

		// Car VIN number, required field
		tbl.string("vin").notNullable();

		// Car Make, required field
		tbl.string("make").notNullable();

		// Car Model, required field
		tbl.string("model").notNullable();

		// Car Mileage, required field
		tbl.string("mileage").notNullable();

		// Car Transmission
		tbl.string("transmission");

		// Car Title Status
		tbl.string("title");
	});
};

exports.down = function (knex) {
	// drops table changes
	return knex.schema.dropTableIfExists("cars");
};
