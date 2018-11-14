require.config({
    paths:{
        "jquery":"libs/jquery-3.3.1.min",
        "underscore":"libs/underscore-min",
        "backbone": 'libs/backbone-min',
        "backbone.marionette": "libs/backbone.marionette",
        "Handlebars": "libs/handlebars",
        "text": "libs/text",
        "hbars": "libs/hbars"
    },
    shim: {
        // third-party libraries shims
        "jquery": {
            deps: ["require"],
            exports: "$"
        },
        "underscore": {
            deps: ["jquery"],
            exports: "_"
        },
        "backbone": {
            deps: ["underscore", "jquery"],
            exports: "Backbone"
        },
        "backbone.marionette": {
            deps: ["backbone"]
        },
        Handlebars: {
            exports: 'Handlebars'
        }
    },
    deps: ["app"]
});