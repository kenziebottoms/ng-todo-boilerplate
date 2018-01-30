"use strict";

angular.module("TodoApp").controller("NewItemCtrl", function($scope, ItemFactory) {
    $scope.newTask = {
        "task": "",
        "isCompleted": false,
        "dueDate": "",
        "assignedTo": "",
        "location": "",
        "urgency": "low",
        "dependencies": ""
    };
    $scope.addNewItem = () => {
        ItemFactory.addItem($scope.newTask);
        $scope.newTask = {};
    };
});