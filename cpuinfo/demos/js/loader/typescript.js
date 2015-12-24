/// <reference path="../../js/typings/jquery.d.ts" />
/// <reference path="../../js/typings/jqueryui.d.ts" />
/// <reference path="../../js/typings/igniteui.d.ts" />
var DepartmentData = (function () {
    function DepartmentData(_label, _budget, _spending) {
        this.label = _label;
        this.budget = _budget;
        this.spending = _spending;
    }
    return DepartmentData;
})();

var companyData = [];
companyData.push(new DepartmentData("Administration", 75, 35));
companyData.push(new DepartmentData("Sales", 30, 80));
companyData.push(new DepartmentData("IT", 60, 20));
companyData.push(new DepartmentData("Marketing", 50, 70));
companyData.push(new DepartmentData("Development", 80, 40));
companyData.push(new DepartmentData("Support", 20, 45));

$.ig.loader({
    scriptPath: "../../igniteui/js/",
    cssPath: "../../igniteui/css/",
    resources: "igDataChart.Radial,igCombo"
});

$.ig.loader(function () {
    $("#chart").igDataChart({
        width: "500px",
        height: "500px",
        dataSource: companyData,
        legend: { element: "legend" },
        axes: [
            {
                name: "angleAxis",
                type: "categoryAngle",
                label: "label",
                interval: 1
            }, {
                name: "radiusAxis",
                type: "numericRadius",
                innerRadiusExtentScale: .1,
                maximumValue: 100,
                minimumValue: 0,
                interval: 25,
                radiusExtentScale: .6
            }],
        series: [
            {
                name: "series1",
                title: 'Budget',
                type: "radialLine",
                angleAxis: "angleAxis",
                valueAxis: "radiusAxis",
                valueMemberPath: "budget",
                thickness: 5,
                markerType: "circle"
            }, {
                name: "series2",
                title: 'Spending',
                type: "radialLine",
                angleAxis: "angleAxis",
                valueAxis: "radiusAxis",
                valueMemberPath: "spending",
                thickness: 5,
                markerType: "circle"
            }],
        horizontalZoomable: true,
        verticalZoomable: true,
        windowResponse: "immediate"
    });

    $("#seriesType").igCombo({
        selectionChanged: function (evt, ui) {
            if (ui.items[0].data.value != undefined) {
                $("#chart").igDataChart("option", "series", [
                    {
                        name: "series1", remove: true
                    }, {
                        name: "series2", remove: true
                    }, {
                        name: "series1",
                        title: "Budget",
                        type: ui.items[0].data.value,
                        angleAxis: "angleAxis",
                        valueAxis: "radiusAxis",
                        valueMemberPath: "budget",
                        thickness: 5,
                        markerType: "circle"
                    }, {
                        name: "series2",
                        title: 'Spending',
                        type: ui.items[0].data.value,
                        angleAxis: "angleAxis",
                        valueAxis: "radiusAxis",
                        valueMemberPath: "spending",
                        thickness: 5,
                        markerType: "circle"
                    }]);
            }
        }
    });
});
//# sourceMappingURL=typescript.js.map
