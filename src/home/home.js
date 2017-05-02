'use strict';

angular.module('easybook')
.controller('HomeCtrl', function($scope, ngNotify, RestSrv, $http) {
    $scope.livros = [];
    $scope.livro = {};

  var livroUrl = 'http://localhost:8080/';

 RestSrv.find(livroUrl, function (data) {
            $scope.livros = data;
            //ngNotify.set('Loaded livros with success.', 'success');
        });

    $scope.listarPorNome = function(nome){
    $http({method:'GET', url:'/localhost:8080/buscar/' + nome})
    .then(function(response){

    $scope.livros = response.data;

    },function(response){

    });
    }

});