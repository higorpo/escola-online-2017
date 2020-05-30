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
            .state('app.painel.disciplinas', {
                 url    : '/disciplinas',
                views  : {
                    'content@app': {
                        templateUrl: 'app/main/painel/disciplinas/disciplinas.html',
                        controller : 'DisciplinasController as vm'
                    }
                }
            });

        // Navigation
        msNavigationServiceProvider.saveItem('painel.disciplinas', {
            title : 'Disciplinas',
            icon  : 'subject',
            state : "app.painel.disciplinas",
            weight: 5
        });
    }

})();