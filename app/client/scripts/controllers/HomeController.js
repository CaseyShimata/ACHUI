myApp.controller('HomeController', function ($scope, fileUploadService) {

    $scope.achData =
        {
            achPageNumber: 1,
            achPageTypeNumber: 1,
            achRecords: [
                {
                    achPageNumber: 1,
                    achPageTypeNumber: 1,
                    achRecordNumber: 1,
                    achRecordTypeNumber: 1,
                    achRawRecord: [
                        "1"
                    ],
                    achFields: [
                        {
                            achPageNumber: 1,
                            achPageTypeNumber: 1,
                            achRecordNumber: 1,
                            achRecordTypeNumber: 1,
                            achFieldRuleNumber: 1,
                            currentValue: [
                                "1"
                            ],
                            currentPosition: 1,
                            achFieldRule: {
                                achPageTypeNumber: 1,
                                achRecordTypeNumber: 1,
                                achFieldRuleNumber: 1,
                                achFieldName: null,
                                achFieldRuleDescription: null,
                                expectedCharacterLength: 1,
                                expectedPositionInRecord: 1,
                                achFieldDataTypeRule: {
                                    justified: "NONE",
                                    paddingType: "NONE",
                                    letterCase: "NA",
                                    regex: "^(?:1|)$",
                                    dataType: "SPECIFICVALUES"
                                },
                                achFieldRuleTests: {
                                    isExpectedDataType: {}
                                }
                            },
                            achValidationTests: {
                                isExpectedDataType: {
                                    achPageNumber: 1,
                                    achPageTypeNumber: 1,
                                    achRecordNumber: 1,
                                    achRecordTypeNumber: 1,
                                    achFieldRuleNumber: 1,
                                    testName: "isExpectedDataType",
                                    message: "The expected data type is: SPECIFICVALUES letter case: NA justification: NONE padding: NONE. The data you submitted was: 1",
                                    didPass: true
                                }
                            }
                        }
                    ],
                    achRecordRule: {
                        achPageTypeNumber: 1,
                        achRecordTypeNumber: 1,
                        achRecordType: "file header",
                        expectedNumberOfFields: 13,
                        permittedPreviousRecordTypeNumber: [
                            9,
                            10
                        ],
                        permittedNextRecordTypeNumber: [
                            5
                        ],
                        required: true,
                        expectedNumberOfCharacters: 94,
                        achFieldRules: {
                            1: {
                                achPageTypeNumber: 1,
                                achRecordTypeNumber: 1,
                                achFieldRuleNumber: 1,
                                achFieldName: null,
                                achFieldRuleDescription: null,
                                expectedCharacterLength: 1,
                                expectedPositionInRecord: 1,
                                achFieldDataTypeRule: {
                                    justified: "NONE",
                                    paddingType: "NONE",
                                    letterCase: "NA",
                                    regex: "^(?:1|)$",
                                    dataType: "SPECIFICVALUES"
                                },
                                achFieldRuleTests: {
                                    isExpectedDataType: {}
                                }
                            }
                        },
                        achRecordRuleTests: {
                            isExpectedRecordLength: {}
                        }
                    },
                    achValidationTests: {
                        isExpectedRecordLength: {
                            achPageNumber: 1,
                            achPageTypeNumber: 1,
                            achRecordNumber: 1,
                            achRecordTypeNumber: 1,
                            achFieldRuleNumber: 0,
                            testName: "isExpectedRecordLength",
                            message: "the record length is 94 the expected length is 94",
                            didPass: true
                        }
                    }
                }
            ],
            achPageRule: {
                expectedRecordModulo: 10,
                achRecordRules: {
                    1: {
                        achPageTypeNumber: 1,
                        achRecordTypeNumber: 1,
                        achRecordType: "file header",
                        expectedNumberOfFields: 13,
                        permittedPreviousRecordTypeNumber: [
                            9,
                            10
                        ],
                        permittedNextRecordTypeNumber: [
                            5
                        ],
                        required: true,
                        expectedNumberOfCharacters: 94,
                        achFieldRules: {
                            1: {
                                achPageTypeNumber: 1,
                                achRecordTypeNumber: 1,
                                achFieldRuleNumber: 1,
                                achFieldName: null,
                                achFieldRuleDescription: null,
                                expectedCharacterLength: 1,
                                expectedPositionInRecord: 1,
                                achFieldDataTypeRule: {
                                    justified: "NONE",
                                    paddingType: "NONE",
                                    letterCase: "NA",
                                    regex: "^(?:1|)$",
                                    dataType: "SPECIFICVALUES"
                                },
                                achFieldRuleTests: {
                                    isExpectedDataType: {}
                                }
                            }
                        },
                        achRecordRuleTests: {
                            isExpectedRecordLength: {}
                        }
                    }
                },
                achPageRuleTests: {
                    isExpectedPageModulo: {},
                    hasExpectedRecordsOrderAndPairQuantities: {}
                }
            },
            achValidationTests: {
                test60record6DoesProceedRecord6: {
                    achPageNumber: 1,
                    achPageTypeNumber: 1,
                    achRecordNumber: 0,
                    achRecordTypeNumber: null,
                    achFieldRuleNumber: 0,
                    testName: "test60record6DoesProceedRecord6",
                    message: "Record of type 6 on line 61 is correctly proceeded by record of type 6",
                    didPass: true
                }
            }
        }


    //Front end function that uploads
    $scope.uploadFile = function () {
        var file = $scope.achFileToUpload;
        var uploadUrl = "http://achlibrary-env.eba-si5rvhzw.us-east-1.elasticbeanstalk.com/ach-file-validate",
            promise = fileUploadService.uploadFileToUrl(file, uploadUrl);

        promise.then(function (response) {
            //todo: map json to JS objects to be more easily consumed on the front end.
            debugger;
            $scope.achData = response;
            // $scope.serverResponse = angular.toJson(response, true);
        }, function () {
            $scope.serverResponse = 'An error has occurred';
        })
    };

    $scope.submitACH = function () {
        //todo: Send the $scope.achData object that is bound to the html view via ng-bind to the ACHLibrary
        //validation endpoint and update the $scope.achData object with the response data.
    };
});
