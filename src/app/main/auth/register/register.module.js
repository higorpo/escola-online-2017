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
            .state('app.auth.register', {
                url    : '/register',
                views  : {
                    'main@'         : {
                        templateUrl: 'app/core/layouts/content-only.html',
                        controller : 'MainController as vm'
                    },
                    'content@app.auth.register': {
                        templateUrl: 'app/main/auth/register/register.html',
                        controller : 'LoginController as vm'
                    }
                }
            });

        // Navigation
        msNavigationServiceProvider.saveItem('auth.register', {
            title    : 'Cadastro',
            icon     : 'home',
            state    : 'app.auth.register',
            /*stateParams: {
                'param1': 'page'
             },*/
            weight   : 1
        });
    }
})();