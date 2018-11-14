define(["jquery",
    "backbone",
    "hbars!templates/category-region/Category-template",
    "../../models/category-region/CategoryModel",
    "backbone.marionette"],
function ($,
    Backbone,
    template,
    CategoryModel) {
    return Backbone.Marionette.ItemView.extend({
            tagName: "li",
            template: template,
            initialize : function(){
                console.log("in initialize");
                //console.log("Model: " + JSON.stringify(this.model.toJSON()));   
            },onRender:function(){
                console.log("category-region");
            }
        })
    });