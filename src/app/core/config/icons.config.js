(function ()
{
    'use strict';

    angular
        .module('app.core')
        .config(runBlock);

    /** @ngInject */
    function runBlock($mdIconProvider)
    {
        $mdIconProvider
            .iconSet("svg:study", "assets/icons/svg/study.svg", 24)
            .iconSet("svg:presentation", "assets/icons/svg/presentation.svg", 24)
            .iconSet("svg:ebook", "assets/icons/svg/ebook.svg", 24);
    }

})();