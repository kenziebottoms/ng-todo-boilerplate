"use strict";

angular.module("TodoApp").controller("ItemListCtrl", function ($scope, ItemFactory) {
    $scope.items = ItemFactory.getItems();
    $scope.deleteItem = (id) => {
        ItemFactory.deleteItem(id);
    };
});