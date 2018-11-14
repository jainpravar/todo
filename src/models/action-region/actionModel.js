define(["backbone"], function (Backbone) {
    return Backbone.Model.extend({
        url:"http://localhost:59384/task/createTask",
        type:"JSON"
    });
});