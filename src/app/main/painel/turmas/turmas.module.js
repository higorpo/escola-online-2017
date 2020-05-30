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
            .state('app.painel.turmas', {
                 url    : '/turmas',
                views  : {
                    'content@app': {
                        templateUrl: 'app/main/painel/turmas/turmas.html',
                        controller : 'TurmasController as vm'
                    }
                }
            });

        // Navigation
        msNavigationServiceProvider.saveItem('painel.turmas', {
            title : 'Turmas',
            icon  : 'subject',
            state : "app.painel.turmas",
            weight: 5
        });
    }

})();