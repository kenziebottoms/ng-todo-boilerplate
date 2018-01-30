"use strict";

angular.module("TodoApp").controller("ItemListCtrl", function ($scope, ItemFactory) {
    
    const refreshItems = () => {
        ItemFactory.getItems()
            .then(response => $scope.items = Object.entries(response));
    };
    
    refreshItems();

    $scope.deleteItem = (key) => {
        ItemFactory.deleteItem(key)
            .then(response => {
                refreshItems();
            });
    };

    $scope.setItemCompletion = (key, complete) => {
        ItemFactory.setItemCompletion(key, complete);
    };
});