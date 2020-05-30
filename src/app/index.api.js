(function ()
{
    'use strict';

    angular
        .module('escolaOnline')
        .factory('api', apiService);

    /** @ngInject */
    function apiService($resource)
    {
        var api = {};

        // Base Url
        api.baseUrl = 'app/data/';

        // api.sample = $resource(api.baseUrl + 'sample/sample.json');

        return api;
    }

})();