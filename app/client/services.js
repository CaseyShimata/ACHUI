myApp.service('fileUploadService', function ($http, $q) {

    this.uploadFileToUrl = function (file, uploadUrl) {
        //FormData, object of key/value pair for form fields and values
        var fileFormData = new FormData();
        fileFormData.append('page', file);

        var deffered = $q.defer();
        $http.post(uploadUrl, fileFormData, {
            transformRequest: angular.identity,
            headers: {'Content-Type': undefined}

        }).then(function (response) {
            deffered.resolve(response.data);
        })
            .catch(function (response) {
                deffered.reject(response.message);
            })
            .finally(function () {
                console.log("Error trying to send an ACH file.");
            });
        return deffered.promise;
    }
});