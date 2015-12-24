/// <reference path="../../js/typings/jquery.d.ts" />
/// <reference path="../../js/typings/jqueryui.d.ts" />
/// <reference path="../../js/typings/igniteui.d.ts" />
$(function () {
    function showAlert(args) {
        $("#error-message").html(args.errorMessage).stop(true, true).fadeIn(500).delay(3000).fadeOut(500);
    }

    var timeOutID;
    function startTimer() {
        var currCount = parseInt($('#timeElapsed').html(), 10);
        $('#timeElapsed').html(String(currCount + 1));
        timeOutID = setTimeout('startTimer()', 1000);
    }
    function areAllFilesUploaded() {
        var uploadInfo = $("#igUpload").igUpload('getFileInfoData');

        //We use the keys countTotalFiles and countUploadingFiles to get the values acsociated with them
        //knowing that we are getting and object FileInfoData
        //Same techniqeue we use down for the other properties
        return uploadInfo["countTotalFiles"] === uploadInfo["countUploadingFiles"];
    }
    function refreshProgressInformation() {
        var uploadInfo = $("#igUpload").igUpload('getFileInfoData'), timeElapsed = parseInt($('#timeElapsed').html(), 10), uploadSpeed;

        if (timeElapsed === 0) {
            uploadSpeed = 0;
        } else {
            uploadSpeed = Math.round(uploadInfo["fileSizeUploaded"] / (1024 * timeElapsed));
        }

        $("#uploadedFiles").html(uploadInfo["countUploadingFiles"]);
        $("#uploaded").html(String(Math.round(uploadInfo["fileSizeUploaded"] / 1024)));
        $("#toUpload").html(String(Math.round((uploadInfo["fileSizeTotal"] - uploadInfo["fileSizeUploaded"]) / 1024)));
        $("#speed").html(uploadSpeed);
        if (uploadSpeed === 0) {
            $("#timeLeft").html(String(0));
        } else {
            $("#timeLeft").html(String(Math.round((uploadInfo["fileSizeTotal"] - uploadInfo["fileSizeUploaded"]) / (1024 * uploadSpeed))));
        }
    }

    $('#igUpload').igUpload({
        mode: 'multiple',
        progressUrl: "../../IGUploadStatusHandler.ashx",
        maxUploadedFiles: 5,
        maxSimultaneousFilesUploads: 2,
        controlId: 'serverID1'
    });

    $("#error").css("display", "none");
    $("#igUpload").on({
        iguploadfileuploading: function (e, args) {
            if ($("#hdnStartTimer").val() === 'false') {
                $("#hdnStartTimer").val('true');
                startTimer();
            }
            refreshProgressInformation();
        }
    });
    $("#igUpload").on({
        iguploadfileuploaded: function (e, args) {
            refreshProgressInformation();
            if (areAllFilesUploaded()) {
                clearTimeout(timeOutID);
                $("#hdnStartTimer").val('false');
            }
            $("#error").css("display", "none");
        }
    });
    $("#igUpload").on({
        iguploadfileuploadaborted: function (e, args) {
            refreshProgressInformation();
            clearTimeout(timeOutID);
            $("#hdnStartTimer").val('false');
        }
    });
    $("#igUpload").on({
        iguploadcancelallclicked: function (e, args) {
            refreshProgressInformation();
            clearTimeout(timeOutID);
            $("#hdnStartTimer").val('false');
        }
    });
    $("#igUpload").on({
        iguploadonerror: function (e, args) {
            refreshProgressInformation();
            clearTimeout(timeOutID);
            $("#hdnStartTimer").val('false');

            if (args.errorType === 'serverside' && args.errorCode === 2) {
                $("#error").stop(true, true).fadeIn(500).delay(3000).fadeOut(500);
            }
        }
    });
});
//# sourceMappingURL=typescript.js.map
