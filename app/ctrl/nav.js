"use strict";

angular.module("TodoApp").controller("NavCtrl", function($scope) {
    $scope.navItems = [
        {
            name: "Logout",
            url: "#!/logout"
        },
        {
            name: "Login",
            url: "#!/login"
        },
        {
            name: "All Items",
            url: "#!/items/list"
        },
        {
            name: "Add New Item",
            url: "#!/items/new"
        }
    ];
});