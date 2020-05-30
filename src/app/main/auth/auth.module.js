(function ()
{
    'use strict';

    angular
        .module('app.auth', [])
        .config(config);

    /** @ngInject */
    function config($stateProvider, msNavigationServiceProvider)
    {
        // State
        $stateProvider
            .state('app.auth', {
                abstract: true,
                url     : '/auth'
            });

        // Navigation
        msNavigationServiceProvider.saveItem('auth', {
            title : 'Autentificação',
            group : true,
            weight: 1,
            hidden: function () {
                return true;
            }
        });
    }

})();