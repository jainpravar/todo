define(["backbone"], function (Backbone) {
    return Backbone.Model.extend({
        url: "http://localhost:59384/category/createCategory",
        type:"JSON"
    });
});