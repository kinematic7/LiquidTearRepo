LiquidTearApplication.controller('LoginControl',
    function ($scope) {

        // ## Initialize ## //

        $scope.Initialize = function () {
            $scope.Data = [{ LoginId: "", Password: "" }];
        }

        // ## Login Function ## //

        $scope.LoginFunc = function () {
            console.log($scope.Data);
            window.location = "../GuiSamples/DynamicTableSample";
        }

        // ## Navigate to Registration Page ## //

        $scope.NavigateToRegistrationFunc = function () {
            window.location = "../Home/Register";
        }

        $scope.Initialize();
    }
);