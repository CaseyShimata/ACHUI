myApp.controller('HomeController', function ($scope, fileUploadService) {


    $scope.uploadFile = function () {
        var file = $scope.myFile;
        var uploadUrl = "http://achlibrary-env.eba-si5rvhzw.us-east-1.elasticbeanstalk.com/ach-file-validate", //Url of webservice/api/server
            promise = fileUploadService.uploadFileToUrl(file, uploadUrl);

        promise.then(function (response) {
            //todo: map json to JS objects to be more easily consumed on the front end.
            $scope.serverResponse = response;
            debugger;
        }, function () {
            $scope.serverResponse = 'An error has occurred';
        })
    };
});
