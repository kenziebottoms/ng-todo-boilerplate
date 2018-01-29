"use strict";

angular.module("TodoApp").controller("ItemDetailsCtrl", function($scope, ItemFactory, $routeParams) {
    let items = ItemFactory.getTodoItems();
    $scope.selectedItem = items.find(item => item.id == $routeParams.id);
});