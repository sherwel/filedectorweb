/// <reference path="../../js/typings/jquery.d.ts" />
/// <reference path="../../js/typings/jqueryui.d.ts" />
/// <reference path="../../js/typings/igniteui.d.ts" />
var DNChartCountryPopulation = (function () {
    function DNChartCountryPopulation(inName, populationIn1990) {
        this.populationIn1990 = populationIn1990;
        this.countryName = inName;
        this.population1990 = populationIn1990;
    }
    return DNChartCountryPopulation;
})();

var dnChartSample = [];
dnChartSample.push(new DNChartCountryPopulation("$$(China)", 1141));
dnChartSample.push(new DNChartCountryPopulation("$$(India)", 849));
dnChartSample.push(new DNChartCountryPopulation("$$(UnitedStates)", 250));
dnChartSample.push(new DNChartCountryPopulation("$$(Indonesia)", 178));
dnChartSample.push(new DNChartCountryPopulation("$$(Brazil)", 150));

$(function () {
    $("#doughnutChart").igDoughnutChart({
        width: 550,
        height: 550,
        series: [{
                name: "Population1990",
                labelMemberPath: "countryName",
                valueMemberPath: "population1990",
                dataSource: dnChartSample,
                labelsPosition: "bestFit",
                legend: { element: "legend" },
                formatLabel: function (context) {
                    return context.itemLabel + " (" + context.item.population1990 + ")";
                }
            }],
        holeDimensionsChanged: function () {
            updateLegendItems();
        }
    });

    function updateLegendItems() {
        $(".ui-chart-legend-item-text > span").each(function () {
            var txt = $(this).text(), idx = txt.lastIndexOf("(");
            if (idx != -1) {
                $(this).text(txt.substr(0, idx));
            } else {
                return false;
            }
        });
    }

    updateLegendItems();
});
//# sourceMappingURL=typescript.js.map
