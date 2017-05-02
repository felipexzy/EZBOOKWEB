'use strict';
angular.module('easybook', ['ngRoute', 'ngNotify', 'ngFileUpload', 'checklist-model'])
    .config(function ($routeProvider) {

        $routeProvider.
        when('/', {
                templateUrl: 'src/home/home.html',
                controller: 'HomeCtrl'
            })
            .when('/anuncio', {
                templateUrl: 'src/anuncio/anuncio.html',
                controller: 'AnunCtrl'
            })
            .when('/login', {
                templateUrl: 'src/login/login.html',
                controller: 'UserCtrl'
            })
            .otherwise({
                redirectTo: '/'
            });

    });