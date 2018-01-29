"use strict";

angular.module("TodoApp").controller("ItemDetailsCtrl", function($scope, ItemFactory, $routeParams) {
    ItemFactory.getItems().then(items => {
        $scope.selectedItem = items[$routeParams.key];
    });
});