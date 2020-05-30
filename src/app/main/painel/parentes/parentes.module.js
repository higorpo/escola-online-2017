(function ()
{
    'use strict';

    angular
        .module('app.painel')
        .config(config);

    /** @ngInject */
    function config($stateProvider, msNavigationServiceProvider)
    {
        // State
        $stateProvider
            .state('app.painel.parentes', {
                 url    : '/parentes',
                views  : {
                    'content@app': {
                        templateUrl: 'app/main/painel/parentes/parentes.html',
                        controller : 'ParentesController as vm'
                    }
                }
            });

        // Navigation
        msNavigationServiceProvider.saveItem('painel.parentes', {
            title  : 'Familiares',
            icon   : 'person',
            state  : "app.painel.parentes",
            weight : 4
        });
    }

})();