"use strict";

angular.module("TodoApp").controller("ItemListCtrl", function ($scope, ItemFactory) {
    ItemFactory.getItems().then(response => $scope.items = Object.entries(response));
    $scope.deleteItem = (id) => {
        ItemFactory.deleteItem(id);
    };
});