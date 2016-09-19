Project = new Mongo.Collection('projects');

Project.allow({
	insert: function(userId, doc) {
		return !!userId;
	},
	update: function(userId, doc) {
		return !!userId;
	}
});

ProjectSchema = new SimpleSchema({
	name: {
		type: String,
		label: "Name"
	},
	author: {
		type: String,
		label: "Author",
		defaultValue: function() {
			return this.userId;
		}
	},
	createdAt: {
		type: Date,
		label: "Created At",
		autoValue: function() {
			return new Date();
		}
	}
});

Project.attachSchema(ProjectSchema);