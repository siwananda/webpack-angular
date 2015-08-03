module.exports = function(angular, app){
    "use strict";

    /**
     * Route setup for ui router.
     * @param $stateProvider
     * @param $locationProvider
     * @param $urlRouterProvider
     * @constructor
     */
    var RoutingConfig = function($stateProvider, $locationProvider, $urlRouterProvider) {
        // Redirect any unmatched url
        $urlRouterProvider.otherwise('default');
        $stateProvider
            .state("default", {
                url: '/default',
                templateUrl: '../public/default.tpl.html'
            })
            .state('products', {
                url: '/products',
                template: '<div ui-view=""></div>',
                abstract: true
            })
            .state('products.list', {
                url: '',
                templateUrl: '../public/productList.tpl.html',
                controller: 'ListController'
            })
            .state('products.detail', {
                url: '/{id}',
                templateUrl: '../public/productDetail.tpl.html',
                controller: 'DetailController'
            });
    };

    /**
     * Interrupts $stateChangeStart to put down some debug information
     * @param $rootScope
     * @param $state
     * @param $location
     * @constructor
     */
    var RunSetup = function($rootScope, $state, $location) {
        $rootScope.$state = $state; // state to be accessed from view
        $rootScope.$location = $location; // location to be accessed from view

        $rootScope
            .$on('$stateChangeStart',
            function(event, toState, toParams, fromState, fromParams) {
                console.debug("START!! -> event(%o) | toState(%o) | fromState(%o)", event, toState, fromState);
            });

        $rootScope
            .$on('$stateChangeSuccess',
            function(event, toState, toParams, fromState, fromParams) {
                console.debug("FINISH!! -> event(%o) | toState(%o) | fromState(%o)", event, toState, fromState);
            });
    };

    app.config(["$stateProvider", "$locationProvider", "$urlRouterProvider", RoutingConfig]);
    app.run(["$rootScope", "$state", "$location", RunSetup]);
};
