(function ()
{
    'use strict';

    angular
        .module('app.painel')
        .controller('PaginaInicialController', PaginaInicialController);

    /** @ngInject */
    function PaginaInicialController($scope, $mdMedia)
    {
        var vm = this;

        // Data
        vm.bannerImages = [
            {url: 'assets/images/banners/larissa-1.jpg', positionY: "-121px"},
            {url: "assets/images/banners/banner3.jpg"},
            {url: "assets/images/banners/banner1.jpg"}
        ];
        // Methods

        //////////

           
    }
})();
