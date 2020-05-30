(function ()
{
    'use strict';

    angular
        .module('escolaOnline')
        .config(routeConfig);

    /** @ngInject */
    function routeConfig($stateProvider, $urlRouterProvider, $locationProvider)
    {
        $locationProvider.html5Mode(true);

        $urlRouterProvider.otherwise('/errors/404');

        $stateProvider
            .state('app', {
                abstract: true,
                views   : {
                    'main@'         : {
                        templateUrl: 'app/core/layouts/vertical-navigation.html',
                        controller : 'MainController as vm'
                    },
                    'toolbar@app'   : {
                        templateUrl: 'app/toolbar/toolbar.html',
                        controller : 'ToolbarController as vm'
                    },
                    'navigation@app': {
                        templateUrl: 'app/navigation/navigation.html',
                        controller : 'NavigationController as vm'
                    }
                    // 'quickPanel@app': {
                    //     templateUrl: 'app/quick-panel/quick-panel.html',
                    //     controller : 'QuickPanelController as vm'
                    // }
                }
            });
    }

})();
