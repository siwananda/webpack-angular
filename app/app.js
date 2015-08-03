'use strict';

// load libraries
require('angular');
require('lodash');
require('angular-ui-router');
require('oclazyload');

var app = angular.module('routeApp', ["ui.router", 'oc.lazyLoad']);

app.controller('MainCtrl', ["$scope", function($scope) {
    $scope.name = 'World';
}]);

//Load up controllers
require("./app-controllers")(angular, app);
//Load up configurations
require("./app-configs")(angular, app);

//bootstraps angular
angular.element(document).ready(function () {
    angular.bootstrap(document, ["routeApp"], {});
});

module.exports = app;