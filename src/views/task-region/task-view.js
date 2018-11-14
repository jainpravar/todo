define(["jquery",
    "backbone",
	"hbars!templates/task-region/task-template",
	"models/task-region/task-model",
    "backbone.marionette"],
function ($,
    Backbone,
	template,
	Model){
	return Backbone.Marionette.ItemView.extend({
		tagName:"div",
		className:"list-item",
		template:template,
		initilize:function(){
			console.log("in ItemView of task");
		},
		onRender:function(){
			console.log(this.model);
		}
	})
});