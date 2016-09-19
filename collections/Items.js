Item = new Mongo.Collection('items');

Item.allow({
	insert: function(userId, doc) {
		return !!userId;
	},
	update: function(userId, doc) {
		return !!userId;
	}
});

ItemSchema = new SimpleSchema({
	name: {
		type: String,
		label: "Name"
	},
	price: {
		type: Number,
		label: "Price"
	}
});

Item.attachSchema(ItemSchema);