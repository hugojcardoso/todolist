var app = angular.module('app',[]);

app.controller('appController', function ($scope, $http){
    $scope.taskList = Array();
    $scope.doneTasks = 0;
    $scope.todoTasks = 0;
    $scope.tasks = 0;
    

    $scope.tasksCounter = function(){        
        for (let i = 0; i < $scope.taskList.length; i++) {
            if ($scope.taskList[i].done == true) {
                $scope.doneTasks = $scope.doneTasks + 1;                
            } else {
                $scope.todoTasks = $scope.todoTasks + 1;
                
            }            
        }        
    }

    //Function for adding task to the task list
    $scope.addTask = function() {
        task = prompt('insira uma nova tarefa')
        $scope.taskList.push({
            done: false,
            task: task
          });
        $scope.tasks = $scope.taskList.length;
        $scope.tasksCounter();
        console.log($scope.taskList);
    };
       
})