Template.projects.onCreated(function() {
	var self = this;
	self.autorun(function() {
		self.subscribe('projects');
	});
});