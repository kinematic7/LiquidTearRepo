var LiquidTearApplication = angular.module("LiquidTearApplication", []);

LiquidTearApplication.service("DynamicTableService", function () {

    var CurrentTableItem = null;
    var scope = null;

    // ## Set Scope for the Static Content of the Form ## //

    this.Initalize = function (localScope) {
        scope = localScope;
    }

    //// ## Show Add Button or Modify Button ## //

    this.ShowAddButtonFunc = function (IsShowAddButton) {
        scope.ShowAddButton = IsShowAddButton;
        scope.ShowEditButton = !IsShowAddButton;
    }

    // ## Show or Hide Add Item Form ## //

    this.ShowAddItemFormFunc = function (isShow) {
        scope.ShowAddItemForm = isShow;
        this.ShowAddButtonFunc(true);
        this.ClearInputFormControls();
    }

    // ## Add an item ## //

    this.AddItemFunc = function () {
        var jsonStr = "{ \"Id:\":\"-1\", ";
        angular.forEach(scope.InputFields, function (InputField) {
            jsonStr = jsonStr + "\"" + InputField.Name + "\":\"" + InputField.Value + "\", ";
        });
        jsonStr = jsonStr + "}";
        jsonStr = jsonStr.replace(", }", "}");
        scope.TableItems.splice(0, 0, JSON.parse(jsonStr));
        scope.ShowAddItemForm = false;
        this.ClearInputFormControls();
    }

    // ## Clear Input Controls ## //

    this.ClearInputFormControls = function () {
        angular.forEach(scope.InputFields, function (InputField) {
            InputField.Value = "";
        });
    }

    // ## Show or Hide Edit Item Form and Populate relevant Input Fields from the Table Data ## //

    this.ShowEditItemFunc = function (TableItem) {

        CurrentTableItem = TableItem;

        scope.ShowAddItemForm = true;
        this.ShowAddButtonFunc(false);

        for (var key in CurrentTableItem) {
            angular.forEach(scope.InputFields, function (InputField) {
                if (InputField.Name == key) {
                    InputField.Value = CurrentTableItem[key];
                }
            });
        }
    }

    // ## Edit and Item ## //

    this.EditItemFunc = function (InputFields) {
        for (var key in CurrentTableItem) {
            angular.forEach(InputFields, function (InputField) {
                if (InputField.Name == key) {
                    CurrentTableItem[key] = InputField.Value;
                }
            });
        }
        scope.ShowAddItemForm = false;
        this.ClearInputFormControls(InputFields);
    }

    // ## Remove item function ## //

    this.RemoveItemFunc = function (TableItem, TableItems) {
        var index = TableItems.indexOf(TableItem);
        TableItems.splice(index, 1);
    }

    // ## Modify or Add Func on Form Submit ## //

    this.ModifyorAddFunc = function () {
        // Do nothing. Prevent all carriage return from keyboards!
    }
});