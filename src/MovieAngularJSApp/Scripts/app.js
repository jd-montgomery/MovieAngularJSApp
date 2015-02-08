(function () {
    'use strict';

    config.$inject = ['$routeProvider', '$locationProvider'];

    angular.module('moviesApp', [
        // Angular modules 
        'ngRoute',
        // Custom modules 
        'moviesServices'

        // 3rd Party Modules

    ]).config(config);

    function config($routeProvider, $locationProvider) {
        $routeProvider
            .when('/', {
                templateUrl: '/views/list.html',
                controller: 'MoviesListController as vm'
            })
            .when('/movies/add', {
            	templateUrl: '/views/add.html',
                controller: 'MoviesAddController as vm'
            })
            .when('/movies/edit/:id', {
            	templateUrl: '/views/edit.html',
                controller: 'MoviesEditController as vm'
            })
            .when('/movies/delete/:id', {
            	templateUrl: '/views/delete.html',
                controller: 'MoviesDeleteController as vm'
            });

        $locationProvider.html5Mode({
            enabled: true,
            requireBase: false
        });
    }

})();