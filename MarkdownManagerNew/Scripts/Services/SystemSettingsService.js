﻿(function () {
    var app = angular.module("app");

    var SystemSettingsService = function ($http) {
        var fac = {};

        fac.GetSettings = function (settingName) {
            return $http.get("/Admin/GetSystemSettingsJson", { params: { settingName: settingName } }).then(function (response) {
                return response.data;
            });
        };

        fac.SetArchiveDeleteSettings = function (settings) {
            return $http.post("/User/SetArchiveDeleteSettings", { activated: settings.activated, timeValue: settings.timeValue, timeUnit: settings.timeUnit });
        };

        return fac;
    }
    app.factory("GroupService", GroupService);
}());