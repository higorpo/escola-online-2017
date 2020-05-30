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
            .state('app.painel.ano-letivo', {
                 url    : '/ano-letivo',
                views  : {
                    'content@app': {
                        templateUrl: 'app/main/painel/ano-letivo/ano-letivo.html',
                        controller : 'AnoLetivoController as vm'
                    }
                }
            });

        // Navigation
        msNavigationServiceProvider.saveItem('painel.ano-letivo', {
            title : 'Ano letivo',
            icon  : 'subject',
            state : "app.painel.ano-letivo",
            weight: 5
        });
    }

})();