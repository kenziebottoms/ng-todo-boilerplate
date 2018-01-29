"use strict";

angular.module("TodoApp").controller("ItemListCtrl", function ($scope, ItemFactory) {
    ItemFactory.getItems().then(response => $scope.items = Object.entries(response));

    $scope.deleteItem = (key) => {
        ItemFactory.deleteItem(key);
    };

    $scope.setItemCompletion = (key, complete) => {
        ItemFactory.setItemCompletion(key, complete);
    };
});