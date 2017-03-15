app.controller('DashboardController',
    ['$scope', '$uibModal', function DashboardController($scope, $uibModal) {

        $scope.modalClick = function () {
           
            var modalContent = $uibModal.open({
                templateUrl: 'modal.html',
                controller: 'ModalInstanceCtrl',
                controllerAs: '$ctrl',
                resolve: {
                    items: function () {
                      
                    }
                }
            })


        };

    }]);

app.controller('ModalInstanceCtrl', function ($uibModalInstance, $scope) {
   
    
   

});