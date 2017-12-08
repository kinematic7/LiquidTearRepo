LiquidTearApplication.controller('BillManagementControl',
    function ($scope, $http, DynamicTableService) {

        var CurrentTableItem = null;
        
        // ## Initialize ## //
     
        $scope.Initialize = function () {

            $scope.ShowAddItemForm = false;

            //// Define Input Fields

            $scope.InputFields = [
                { Name: "Name", Value: "", Type: "text", PlaceHolder: "Name", ColumnWidth: "35%" },
                { Name: "Description", Value: "", Type: "text", PlaceHolder: "Url", ColumnWidth: "35%" },
                { Name: "LoginId", Value: "", Type: "text", PlaceHolder: "Login Id", ColumnWidth: "15%" },
                { Name: "Password", Value: "", Type: "text", PlaceHolder: "Password", ColumnWidth: "15%" },
            ];
           
            // Load previous saved items

            $scope.TableItems = [];

            $http.post("GetBillingData", null,
                {

                }).then(function (response) {
                    $scope.TableItems = response.data;
                })
                .catch(function (response) {
                    alert('error'); 
                });

            // Used to call DynamicTableService from DynamicTable in html

            $scope.DynamicTableService = DynamicTableService;            
        }

        // Call Initialize after function creation

        $scope.Initialize();
    }
);