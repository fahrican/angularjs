var myApp = angular.module('myApp', []);

myApp.controller('mainController', ['$scope', '$filter', '$timeout', function ($scope, $filter, $timeout) {

    $scope.handle = "";

    $scope.lowercasehandle = function () {
        return $filter('lowercase')($scope.handle);
    };

    $scope.$watch('handle', function ($newValue, $oldValue) {

        console.log("Change happened");
        console.log("Old value: " + $oldValue);
        console.log("New value: " + $newValue);
    });

    $timeout(function () {

        $scope.handle = "Twitter post";
        console.log("Scope has changed!");
    }, 3000);

    $scope.characters = 5;

    $scope.myRules = [

        {"name": "Rule1"},
        {"name": "Rule2"},
        {"name": "Rule3"}
    ];

}]);
