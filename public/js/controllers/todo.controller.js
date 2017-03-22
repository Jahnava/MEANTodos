(function(){
  angular.module('MEANTodos')
    .controller('TodoController', TodoController);

    TodoController.$inject = ['$scope', 'TodoService'];

    function TodoController($scope, TodoService){
      $scope.todos = [];
      $scope.newTodo = {};
      $scope.addTodo = addTodo;
      $scope.deleteTodo = deleteTodo;
      $scope.update = update;
      $scope.edit = edit;

      getTodos();

      $scope.$watch(function watcher(){
        return TodoService.fetch();
      },
      function onChange(){
        $scope.todos = TodoService.fetch();
      });

      function deleteTodo(todo){
        TodoService.delete(todo);
        getTodos();
      }

      function edit(todo){
        todo.edit = true;
      }

      function update(todo){
        todo.edit = false;
        TodoService.update(todo);
        console.log(todo);
      }

      function addTodo(todo){
        TodoService.create(todo);
        $scope.newTodo = {};
        getTodos();
      }

      function getTodos(){
        console.log('getting todos...');
        TodoService.getAll();
      }

    }
})();
