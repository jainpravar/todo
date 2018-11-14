define(["backbone"], function (Backbone) {
    return Backbone.Collection.extend({
        url: function(){
            return "http://localhost:59384/category/getAllCategories";
        }
    });
});