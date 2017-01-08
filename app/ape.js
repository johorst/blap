var t = [
		 {
		  team1 : "Stuttgart",
		  team2 : "Kickers",
		  quote1 : 1.03,
		  quote0 : 0.03,
		  quote2 : 2.03},
		 {
		  team1 : "Sonnenhof",
		  team2 : "Fürth",
		  quote1 : 10.03,
		  quote0 : 0.03,
		  quote2 : 20.03},
		 {
		  team1 : "Backnang",
		  team2 : "VfB",
		  quote1 : 11.03,
		  quote0 : 0.03,
		  quote2 : 22.03}
		 ];

 // Creating the module called blwett
var blwett = angular.module("blwett", []);
 // Registering the blwettCtrl to the blwett module
blwett.controller("blwettCtrl", function ($scope) {
	 // Binding the car's array to the scope
	 $scope.begegnungen = t;
 });
