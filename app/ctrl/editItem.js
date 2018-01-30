"use strict";

angular.module("TodoApp").controller("EditItemCtrl", function($scope, $routeParams, ItemFactory, $location) {
    let key = $routeParams.key;
    ItemFactory.getItem(key).then(item => {
        $scope.item = item;
    });
    $scope.editItem = () => {
        ItemFactory.editItem(key, $scope.item).then(response => {
            if (response !== null) {
                $location.path(`/items/details/${key}`);
            }
        });
    };
});