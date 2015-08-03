module.exports = function(angular, app){
    "use strict";

    /**
     * list products
     * @param $scope
     * @param $state
     * @constructor
     */
    var ListController = function($scope, $state) {
        $scope.products = productData;
        $scope.openDetail = function(product) {
            $state.transitionTo("products.detail", {
                id: product.id
            }, {
                reload: true,
                inherit: true,
                notify: true
            });
        };
    };

    /**
     * List detail of a product
     * @param $scope
     * @param $state
     * @param $stateParams containing product detail
     * @constructor
     */
    var DetailController = function($scope, $state, $stateParams) {
        console.log($stateParams);
        console.log(productData);
        $scope.product = _.findWhere(productData, {
            id: parseInt($stateParams.id)
        });
        console.log($scope.product);
    };

    app.controller('ListController', ["$scope", "$state", ListController]);
    app.controller('DetailController',  ["$scope", "$state", "$stateParams", DetailController]);
};


