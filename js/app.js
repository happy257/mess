var app = angular.module('materializeApp', ['ui.materialize','ui.router'])
    .controller('BodyController', ["$scope", function ($scope) {
        $scope.select = {
            value: "Option1",
            choices: ["Option1", "I'm an option", "This is materialize", "No, this is Angular."]
        };	
}]);
