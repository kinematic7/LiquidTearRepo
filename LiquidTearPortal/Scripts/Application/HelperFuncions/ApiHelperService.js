LiquidTearApplication.service("ApiHelperService", function () {

    // # Http Post with Data and Url ## //

    this.Post = function (postData, $http, url) {
        $http({
            url: url,
            method: "POST",
            data: postData,
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
        }).success(function (data, status, headers, config) {
            return [{ data, status }]; // assign  $scope.persons here as promise is resolved here 
        }).error(function (data, status, headers, config) {
            return [{ data, status }];
        });
    }
}
    