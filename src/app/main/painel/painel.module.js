(function ()
{
    'use strict';

    angular
        .module('app.painel', [])
        .config(config);

    /** @ngInject */
    function config($stateProvider, msApiProvider, msNavigationServiceProvider)
    {
        // State
        $stateProvider
            .state('app.painel', {
                abstract: true,
                url     : '/painel'
            });

        // Navigation
        msNavigationServiceProvider.saveItem('painel', {
            title : 'Painel',
            group : true,
            weight: 1
        });
    }

})();