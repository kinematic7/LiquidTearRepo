LiquidTearApplication.controller('TopMenuControl',

    function ($scope) {

        // Initialize Top Menu

        $scope.Initialize = function () {
            $scope.Links = [
                { url: "../Home/DynamicTableSample", text: "Dynamic Table", style: "success" },
                { url: "../Home/Index", text: "Logout", style: "danger" }
            ];
        }

        // Show or Hide Top Menu based on url

        $scope.ShowTopMenuFunc = function () {

            var globalhideTopMenu = ["Home/Index", "Home/Register"];
            var isHide = false;

            for (var i = 0; i < globalhideTopMenu.length; i++) {
                if (window.location.href.indexOf(globalhideTopMenu[i]) > 0) {
                    isHide = true;
                    break;
                }
            }

            return isHide;
        }

        $scope.Initialize();
    }
);