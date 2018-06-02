var myApp = angular.module('myApp', []);

myApp.controller("mainController", function ($scope, $timeout) {

    $scope.name = "Fahri";
    $timeout(function () {

        $scope.name = "Bro's";
    }, 3000);
});
