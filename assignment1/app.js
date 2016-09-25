(function() {
  'use strict';

  angular.module('LunchCheck', [])

  .controller('LunchCheckController', LunckCheckController);

  LunchCheckController.$inject = ['$scope']

  function LunckCheckController ($scope) {

    $scope.enteredLunch = "";
    $scope.message = "";
    $scope.checkLunchValue = function () {
      var msg = checkLunchValue($scope.enteredLunch);
      $scope.message = msg;
    }

    function checkLunchValue(lunch) {
      if (lunch.length == 0) {
        return "Please enter data first";
      }

      //get the array containing of lunch items entered
      //empty string is considered OK
      var lunchItems = lunch.split(",");
      if (lunchItems.length < 4) {
        return "Enjoy!";
      }
      if (lunchItems.length > 3) {
        return "Too much!";
      }
    }
  }

})();
