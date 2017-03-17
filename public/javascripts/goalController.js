angular.module('goalController', [])
.controller('goalCtrl', function($scope, $http, Goals) {
  Goals.get().success(function(data) {
<<<<<<< HEAD
    for (var currentIndex=0; currentIndex<data.length; currentIndex=currentIndex+1) {
    var currentElement = data[currentIndex];
      currentElement.percentatge = (currentElement.ok/(currentElement.ok+currentElement.ko))*100;
    }
    $scope.goals = data;
=======
    $scope.loadDay(new Date(), data);
>>>>>>> profjesus/master
  });
  $scope.loadDay = function(date, goals) {
    Goals.getDay(date).success(function(day) {
      if (!day) {
        var originalDate = new Date(date);
        day = {day: originalDate};
      } else { // Convert to javascript date in order to avoid datepicker problems
        day.day = new Date(day.day);
      }
      $scope.goals = updateGoals(goals, day);
      $scope.day = day.day;
    });
  };
  updateGoals = function (goals, day) {
    for (var i=0; i<goals.length; i++) {
      var currentElement = goals[i];
      currentElement.percentage = (currentElement.ok/(currentElement.ok+currentElement.ko))*100;
      if (day.goals) {
        for (var j=0; j<day.goals.length; j++) {
          if (day.goals[j]._id == currentElement._id) {
            currentElement.result = day.goals[j].result;
            break;
          }
        }
      } else {
        currentElement.result = 0;
      }
    }
    return(goals);
  };
  $scope.addGoal = function() {
    if(!$scope.goalName || $scope.goalName === '') { return; }
    var goalObject = {
      description: $scope.goalName,
      ok: 0,
      ko: 0
    };
    Goals.create(goalObject).success(function(data) {
<<<<<<< HEAD
      goalObject._id=data._id;
      $scope.goals.push(goalObject);
=======
      data.percentage = 0;
      $scope.goals.push(data);
>>>>>>> profjesus/master
      $scope.goalName = '';
    });
  };
  $scope.removeGoal = function(goal) {
    Goals.delete(goal._id).success(function(data) {
      var index = $scope.goals.indexOf(goal);
      $scope.goals.splice(index, 1);
$scope.addOk = function(goal) {
  Goals.addOk(goal._id).success(function(data) {
});
};
$scope.addKo = function(goal) {
  Goals.addKo(goal._id).success(function(data) {
    });
  };
  $scope.addOk = function(goal) {
    Goals.addOk(goal._id, $scope.day).success(function(data) {
    });
  };
  $scope.addKo = function(goal) {
    Goals.addKo(goal._id, $scope.day).success(function(data) {
    });
  };
});
