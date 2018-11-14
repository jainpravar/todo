define(["jquery",
"backbone",
"hbars!templates/task-region/task-composit-template",
"views/task-region/task-view",
"models/task-region/task-model",
"backbone.marionette"],
function ($, Backbone, template, TaskView, TaskModel) {
    return Backbone.Marionette.CompositeView.extend({
        itemViewContainer: "#tasks",
        className:"task-container", 
        itemView: TaskView,
        template: template,
        onRender:function(){
			console.log(this);
		},
        events:{
            "click #delete":"deleteTask"
        },
        deleteTask:function(){
			TaskModel.save();
        }
    });
});