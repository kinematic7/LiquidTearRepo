LiquidTearApplication.controller('DynamicTableSampleControl',
    function ($scope, DynamicTableService) {

        var CurrentTableItem = null;
        
        // ## Initialize ## //
     
        $scope.Initialize = function () {

            $scope.ShowAddItemForm = false;

            // Define Input Fields

            $scope.InputFields = [
                { Name: "Name", Value: "", Type: "text", PlaceHolder: "Task Name" },
                { Name: "Description", Value: "", Type: "Text", PlaceHolder: "Description" }
            ];

            // Load previous saved items

            $scope.TableItems = [
                { Id: "1", Name: "Sample1", Description: "Description1" },
                { Id: "2", Name: "Sample2", Description: "Description2" }
            ];     

            // Used to call DynamicTableService from DynamicTable in html

            $scope.DynamicTableService = DynamicTableService;

        }

        // Call Initialize after function creation

        $scope.Initialize();
    }
);