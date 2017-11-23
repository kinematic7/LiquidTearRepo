LiquidTearApplication.service("DynamicTableService", function () {

    var CurrentTableItem = null;

    // ## Show or Hide Add Item Form ## //

    this.ShowAddItemFormFunc = function (isShow, InputFields, ShowAddItemForm) {
        ShowAddItemForm = isShow;
        this.ClearInputFormControls(InputFields);
    }

    // ## Add an item ## //

    this.AddItemFunc = function (InputFields, TableItems) {
        var jsonStr = "{ \"Id\":\"-1\", ";
        angular.forEach(InputFields, function (InputField) {
            jsonStr = jsonStr + "\"" + InputField.Name + "\":\"" + InputField.Value + "\", ";
            this
        });
        jsonStr = jsonStr + "}";
        jsonStr = jsonStr.replace(", }", "}");
        TableItems.splice(0, 0, JSON.parse(jsonStr));
        this.ClearInputFormControls(InputFields);
    }


    // ## Clear Input Controls ## //

    this.ClearInputFormControls = function (InputFields) {
        angular.forEach(InputFields, function (InputField) {
            InputField.Value = "";
        });
    }

    // ## Show or Hide Edit Item Form and Populate relevant Input Fields from the Table Data ## //

    this.ShowEditItemFunc = function (TableItem, InputFields) {

        CurrentTableItem = TableItem;

        for (var key in CurrentTableItem) {
            angular.forEach(InputFields, function (InputField) {
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