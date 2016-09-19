Meteor.publish('catalog', function() {
	return Catalog.find({ author: this.userId });
});