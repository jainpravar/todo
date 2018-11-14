define(["jquery",
    "backbone",
	"hbars!templates/action-region/action-template",
	"../../models/action-region/actionModel",
    "backbone.marionette"],
function ($,
    Backbone,
	template,
	ActionModel){
	return Backbone.Marionette.ItemView.extend({
		className:"action-container",
		template:template,
		initilize:function(){
			console.log("in ItemView of task");
		},
		onRender:function(){
			console.log("action-region");
		},
		events:{
			"click #save":"addTask"
		},
		addTask:function(){
			var model = new ActionModel(); 
			model.set("Name",$("input[name=taskName]").val());
			model.set("Priority",$("input[name=taskPriority]").val());
			model.set("DueDate", $("input[name=dueDate]").val());
			model.set("CategoryId", $("input[name=categoryId]").val());
			model.set("IsFavorite", $("input[name=isFavorite]").val());
			model.set("IsDone", $("input[name=isDone]").val());
			
			model.save({
				success: function(response) 
				{
					alert('Yes');
	
				},
				error: function(response)
				{
					alert('No');
				}
			});
		}

	})
});