(function ()
{
    'use strict';

    angular
        .module('app.painel')
        .config(config);

    /** @ngInject */
    function config($stateProvider, $urlRouterProvider, msApiProvider, msNavigationServiceProvider)
    {

        $urlRouterProvider.when("/", "/painel/pagina-inicial");

        // State
        $stateProvider
            .state('app.painel.pagina-inicial', {
                url    : '/pagina-inicial',
                views  : {
                    'content@app': {
                        templateUrl: 'app/main/painel/pagina-inicial/pagina-inicial.html',
                        controller : 'PaginaInicialController as vm'
                    }
                }
            });

        // Navigation
        msNavigationServiceProvider.saveItem('painel.pagina-inicial', {
            title    : 'Página Inicial',
            icon     : 'home',
            state    : 'app.painel.pagina-inicial',
            /*stateParams: {
                'param1': 'page'
             },*/
            weight   : 1
        });
    }
})();