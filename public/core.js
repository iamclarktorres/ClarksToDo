const scotchTodo = angular.module('scotchTodo', []);

function mainController($scope, $http) {
    $scope.formData = {};

    $http.get('/api/todos')
        .then((data) => {
            $scope.todos = data;
            console.log(data);
        })
        .catch((data) => {
            console.log('Error: ' + data);
        });

    $scope.createTodo = () => {
        $http.post('/api/todos', $scope.formData)
            .then((data) => {
                $scope.formData = {};
                $scope.todos = data;
                console.log(data);
            })
            .catch((data) => {
                console.log('Error: ' + data);
            });
    }

    $scope.deleteTodo = (id) => {
        $http.delete('/api/todos' + id)
            .then((data) => {
                $scope.todos = data;
                console.log(data);
            })
            .catch((data) => {
                console.log('Error: ' + data);
            });
    }
}
