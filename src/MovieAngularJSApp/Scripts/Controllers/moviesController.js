(function () {
    'use strict';

    angular
        .module('moviesApp')
        .controller('MoviesListController', MoviesListController)
        .controller('MoviesAddController', MoviesAddController)
        .controller('MoviesEditController', MoviesEditController)
        .controller('MoviesDeleteController', MoviesDeleteController);

    /* Movies List Controller  */
    MoviesListController.$inject = ['Movie'];

    function MoviesListController(Movie) {
        var vm = this;
        vm.movies = Movie.query();
    }

    /* Movies Create Controller */
    MoviesAddController.$inject = ['$location', 'Movie'];

    function MoviesAddController($location, Movie) {
        var vm = this;
        vm.movie = new Movie();
        vm.add = function () {
            vm.movie.$save(function () {
                $location.path('/');
            });
        };
    }

    /* Movies Edit Controller */
    MoviesEditController.$inject = ['$routeParams', '$location', 'Movie'];

    function MoviesEditController($routeParams, $location, Movie) {
        var vm = this;
        vm.movie = Movie.get({ id: $routeParams.id });
        vm.edit = function () {
            vm.movie.$save(function () {
                $location.path('/');
            });
        };
    }

    /* Movies Delete Controller  */
    MoviesDeleteController.$inject = ['$routeParams', '$location', 'Movie'];

    function MoviesDeleteController($routeParams, $location, Movie) {
        var vm = this;
        vm.movie = Movie.get({ id: $routeParams.id });
        vm.remove = function () {
            vm.movie.$remove({ id: vm.movie.Id }, function () {
                $location.path('/');
            });
        };
    }
})();
