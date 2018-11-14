define(["jquery", "backbone", "backbone.marionette",],
	function ($, Backbone) {
		var Workspace =	 Backbone.Router.extend({
		
		});
		MyApp = new Backbone.Marionette.Application;
		MyApp.addRegions({
			categoryRegion: '#category-region',
			taskRegion: '#task-region',
			actionRegion: '#action-region'
		});
		MyApp.addInitializer(function () {
			console.log("App Started - initializer");
			require(["views/category-region/Category-Composit-View", "collections/category-region/CategoryCollection"],
			 function (CategoryCompositView, CategoryCollection){
					var categoryCollection = new CategoryCollection();
					categoryCollection.fetch().done(function () {
						console.log("category model fetch done");
						console.log(this);
						var category = new CategoryCompositView({ collection: categoryCollection});
						MyApp.categoryRegion.show(category);
					});
			});
			require(["views/task-region/task-composit-view","collections/task-region/task-collection"],
					function (TaskCompositView,TaskCollection) {
						var taskCollection = new TaskCollection();
						taskCollection.fetch().done(function(){
							console.log("tasks fetch done!");
							console.log(this);
							var taskCompositView = new TaskCompositView({collection:taskCollection});
							MyApp.taskRegion.show(taskCompositView);
						});
								
					});
			require(["views/action-region/action-view"],
					function (ActionView) {
						var actionView = new ActionView();
						MyApp.actionRegion.show(actionView);			
					});
		});
		$(document).ready(function () {
			var r = new Workspace();
			Backbone.history.start();
			MyApp.start();
		});
	});