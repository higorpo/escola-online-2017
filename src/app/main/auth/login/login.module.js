(function ()
{
    'use strict';

    angular
        .module('app.auth')
        .config(config);

    /** @ngInject */
    function config($stateProvider, msNavigationServiceProvider)
    {
        // State
        $stateProvider
            .state('app.auth.login', {
                url    : '/login',
                views  : {
                    'main@'         : {
                        templateUrl: 'app/core/layouts/content-only.html',
                        controller : 'MainController as vm'
                    },
                    'content@app.auth.login': {
                        templateUrl: 'app/main/auth/login/login.html',
                        controller : 'LoginController as vm'
                    }
                }
            });

        // Navigation
        msNavigationServiceProvider.saveItem('auth.login', {
            title    : 'Entrar',
            icon     : 'home',
            state    : 'app.auth.login',
            /*stateParams: {
                'param1': 'page'
             },*/
            weight   : 1
        });
    }
})();