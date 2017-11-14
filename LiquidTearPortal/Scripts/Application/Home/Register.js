LiquidTearApplication.controller('RegisterControl',
    function ($scope, $timeout) {

        // ## Registration Function ## //

        $scope.RegisterFunc = function () {

            var data = $scope.data;
            var hasError = false;
            
            if (!(data.Password == data.ConfirmPassword)) {
                hasError = true;
                $scope.errPassword_Mismatch_Msg = true;;
                $timeout(function () {
                    $scope.errPassword_Mismatch_Msg = false;
                    data.Password = "";
                    data.ConfirmPassword = "";
                }, 1500);
            }

            if (!hasError) {
                console.log($scope.data);
            }
        }

        // ## Navigate to Login Page Function ## //

        $scope.NavigateToLoginFunc = function () {
            window.location = "../Home/Index";
        };
    }
);