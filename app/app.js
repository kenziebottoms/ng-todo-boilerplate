"use strict";

angular.module("TodoApp", ["ngRoute"])
    .config($routeProvider => {
        $routeProvider
            .when("/items/list", {
                templateUrl: "/partials/item-list.html",
                controller: "ItemListCtrl"
            })
            .when("/items/new", {
                templateUrl: "/partials/item-form.html",
                // TODO: controller: "NewItemCtrl"
            })
            // this goes at the bottom because otherwise
            //  it would catch "list and "new" as :id
            .when("/items/details/:id", {
                templateUrl: "/partials/item-details.html",
                controller: "ItemDetailsCtrl"
            })
            .otherwise("items/list");
    });