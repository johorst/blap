var blwett = angular.module("blwett", []);
blwett.controller("blwettCtrl", function ($scope, $http) {
    $http.get("./databas/18wsq.json").success(function( data ) {
    $scope.begegnungen = data;
    });
    $http.get("./kto.json").success(function( data ) {
    $scope.user = data.kto.user;
    $scope.saldo = data.kto.saldo;
    window.glvaruser =  data.kto.user;
    });
});