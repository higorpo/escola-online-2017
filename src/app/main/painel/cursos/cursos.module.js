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
            .state('app.painel.cursos', {
                url    : '/cursos',
                views  : {
                    'content@app': {
                        templateUrl: 'app/main/painel/cursos/cursos.html',
                        controller : 'CursosController as vm'
                    }
                },
                resolve: {
                    CursosData: function ($q, cursosApi) {
                        var deferred = $q.defer();
                        
                        cursosApi.get().then(function (response) {
                            deferred.resolve(response);
                        });

                        return deferred.promise;
                    }
                }
            });

        // Navigation
        msNavigationServiceProvider.saveItem('painel.cursos', {
            title : 'Cursos',
            icon  : 'subject',
            state : "app.painel.cursos",
            weight: 5
        });
    }

})();