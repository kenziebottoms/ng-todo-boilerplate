"use strict";

angular.module("TodoApp").controller("NewItemCtrl", function($scope, ItemFactory) {
    $scope.newTask = {
        "id": 0,
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
    };
});