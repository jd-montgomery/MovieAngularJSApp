(function () {
    'use strict';

    angular
        .module('moviesApp')
        .controller('moviesController', moviesController);

    moviesController.$inject = ['Movies']; 

    function moviesController(Movies) {
        /* jshint validthis:true */
        var vm = this;
        vm.movies = Movies.query();

        activate();

        function activate() { }
    }
})();
