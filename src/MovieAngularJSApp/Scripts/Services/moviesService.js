(function () {
    'use strict';

    var moviesServices = angular.module('moviesServices', ['ngResource']);

    /* Movies Service */
    moviesServices.factory('Movies', ['$resource',
    function ($resource) {
        return $resource('/api/movies/', {}, {
            query: { method: 'GET', params: {}, isArray: true }
        });
    }]);

    /* Get Movie Service */
    moviesServices.factory('Movie', ['$resource',
    function Movie($resource) {
        return $resource('/api/movies/:id');
    }]);
})();