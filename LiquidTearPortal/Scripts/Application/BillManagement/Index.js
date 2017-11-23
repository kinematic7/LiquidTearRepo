LiquidTearApplication.controller('BillManagementControl',
    function ($scope, DynamicTableService) {

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

            $scope.TableItems = [
                { Id: "1", Name: "Sample1", Description: "Description1", LoginId: "XX", Password: "YY" },
                { Id: "2", Name: "Sample2", Description: "Description2", LoginId: "XX", Password: "YY" }
            ];     
           
            // Used to call DynamicTableService from DynamicTable in html

            $scope.DynamicTableService = DynamicTableService;

        }

        // Call Initialize after function creation

        $scope.Initialize();
    }
);