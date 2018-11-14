define(["jquery",
"backbone",
"hbars!templates/category-region/Category-Composit-Template",
"views/category-region/CategoryView",
"models/category-region/CategoryModel",
"backbone.marionette"],
function ($, Backbone, template, CategoryView, CategoryModel) {
    return Backbone.Marionette.CompositeView.extend({
        itemViewContainer: "#categories",
        className:"category-container", 
        itemView: CategoryView,
        template: template,
            events:{
                "click #saveCategory":"addCategory"
            },
            addCategory:function(){
                categoryModel=new CategoryModel();
                categoryModel.set("Name",$("input[name=categoryName]").val());
                categoryModel.set("IsDefault",$("input[name=isDefault]").val());
                categoryModel.save({
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
    });
});