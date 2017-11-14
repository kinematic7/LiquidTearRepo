LiquidTearApplication.controller('TopMenuControl',

    function ($scope) {

        // Initialize Top Menu

        $scope.Initialize = function () {
            $scope.Links = [
                { url: "../Tasks/Index", text: "Tasks", style: "success" },
                { url: "../Contacts/Index", text: "Contacts", style: "success" },
                { url: "../Bills/Index", text: "Bills", style: "success" },
                { url: "../Locations/Index", text: "Locations", style: "success" },
                { url: "../Notes/Index", text: "Notes", style: "success" },
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