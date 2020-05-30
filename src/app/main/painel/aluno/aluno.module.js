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
            .state('app.painel.aluno', {
                 url    : '/alunos',
                views  : {
                    'content@app': {
                        templateUrl: 'app/main/painel/aluno/aluno.html',
                        controller : 'AlunoController as vm'
                    }
                }
            });

        // Navigation
        msNavigationServiceProvider.saveItem('painel.aluno', {
            title  : 'Alunos',
            icon   : 'person',
            state  : "app.painel.aluno",
            weight : 3
        });
    }

})();