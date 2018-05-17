angular.module('todoListApp', [])
    .controller('mainCtrl', function($scope) {
        $scope.helloWorld = function () {
            console.log("This is the helloWorld() function!");
        };
    });