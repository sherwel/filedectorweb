/// <reference path="../../js/typings/jquery.d.ts" />
/// <reference path="../../js/typings/jqueryui.d.ts" />
/// <reference path="../../js/typings/igniteui.d.ts" />

$(function () {
    var chart = $("#chart");
    var zoombar = $("#zoombar");

    chart.igDataChart({
        width: "100%",
        height: "300px",
        axes: [
            {
                name: "xAxis",
                type: "categoryX",
                dataSource: financialData1,
                label: "DateString",
                interval: 1,
                title: "$$(Zoombar_Chart_Axis_Date)"
            },
            {
                name: "yAxis",
                type: "numericY",
                title: "$$(Zoombar_Chart_Axis_Price)"
            }
        ],
        series: [
            {
                name: "series1",
                dataSource: financialData1,
                title: "Price Series",
                type: "financial",
                isTransitionInEnabled: true,
                displayType: "candlestick",
                xAxis: "xAxis",
                yAxis: "yAxis",
                openMemberPath: "Open",
                highMemberPath: "High",
                lowMemberPath: "Low",
                showTooltip: true,
                tooltipTemplate: "tooltipTemplate",
                closeMemberPath: "Close",
                thickness: 1,
                trendLineBrush: "rgba(68, 172, 214, .8)",
                trendLineThickness: 5,
                trendLineType: "exponentialAverage",
                negativeBrush: "rgba(198, 45, 54, .8)"
            },
            {
                name: "series2",
                dataSource: financialData2,
                title: "Price Series",
                type: "financial",
                isTransitionInEnabled: true,
                xAxis: "xAxis",
                yAxis: "yAxis",
                openMemberPath: "Open",
                highMemberPath: "High",
                lowMemberPath: "Low",
                closeMemberPath: "Close",
                thickness: 1,
                showTooltip: true,
                tooltipTemplate: "tooltipTemplate",
                trendLineBrush: "rgba(73, 73, 73, .8)",
                trendLineThickness: 5,
                trendLineType: "exponentialAverage",
                negativeBrush: "rgba(198, 45, 54, .8)",
                displayType: "candlestick"
            }
        ],
        horizontalZoomable: true,
        verticalZoomable: false,
        windowResponse: "immediate"
    });
    zoombar.igZoombar({
        target: "#chart",
        zoomWindowMinWidth: 1.2
    });
});
//# sourceMappingURL=typescript.js.map
