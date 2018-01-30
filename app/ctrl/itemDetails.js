"use strict";

angular.module("TodoApp").controller("ItemDetailsCtrl", function($scope, ItemFactory, $routeParams) {
    let key = $routeParams.key;
    ItemFactory.getItem(key).then(item => {
        $scope.item = item;
        $scope.key = key;
    });
});