angular.module('todoListApp', [])
    .controller('mainCtrl', function ($scope) {
        $scope.helloWorld = function () {
            console.log("This is the helloWorld() function!");
        };
    })
    .controller('coolCtrl', function ($scope) {
        $scope.whoAmI = function () {
            console.log("WHo am I?");
        },
        $scope.helloWorld = function () {
            console.log("coolCtrl helloWorld() function!");
        };
    })
    .controller('siblingCtrl', function ($scope) {
        $scope.siblingTest = function () {
            console.log("I am a sibling.")
        }
    });