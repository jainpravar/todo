define(["backbone","models/task-region/task-model"], function (Backbone,TaskModel) {
    return Backbone.Collection.extend({
        model:TaskModel,
        url: function(){
            return "http://localhost:59384/task/task";
         }
        // url:function(){
        //     console.log("this is model to delete");
        //     console.log(this);
        //     return "http://localhost:59384/task/deleteTask/?id="+this.get("Id");
            
        // }
    });
});