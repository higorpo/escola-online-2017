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
            .state('app.painel.professor', {
                 url    : '/professores',
                views  : {
                    'content@app': {
                        templateUrl: 'app/main/painel/professor/professor.html',
                        controller : 'ProfessorController as vm'
                    }
                }
            });

        // Navigation
        msNavigationServiceProvider.saveItem('painel.professor', {
            title : 'Professores',
            icon  : 'person',
            state : "app.painel.professor",
            weight: 2
        });
    }

})();