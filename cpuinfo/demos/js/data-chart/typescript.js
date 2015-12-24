/// <reference path="../../js/typings/jquery.d.ts" />
/// <reference path="../../js/typings/jqueryui.d.ts" />
/// <reference path="../../js/typings/igniteui.d.ts" />
var CountryPopulation = (function () {
    function CountryPopulation(inName, populationIn1995, populationIn2005) {
        this.countryName = inName;
        this.population2005 = populationIn2005;
        this.population1995 = populationIn1995;
    }
    return CountryPopulation;
})();

var samplePopulation = [];
samplePopulation.push(new CountryPopulation("$$(Chart_Composite_China_DS)", 1216, 1297));
samplePopulation.push(new CountryPopulation("$$(India)", 920, 1090));
samplePopulation.push(new CountryPopulation("$$(UnitedStates)", 266, 295));
samplePopulation.push(new CountryPopulation("$$(Indonesia)", 197, 229));
samplePopulation.push(new CountryPopulation("$$(Brazil)", 161, 186));

$(function () {
    $("#data-chart").igDataChart({
        width: "80%",
        height: "400px",
        title: "$$(Chart_title_countries_pop)",
        subtitle: "$$(Chart_subtitle_countries_pop_95_05)",
        dataSource: samplePopulation,
        axes: [
            {
                name: "NameAxis",
                type: "categoryX",
                title: "$$(CategoryAxis_title_countries_pop)",
                label: "countryName"
            },
            {
                name: "PopulationAxis",
                type: "numericY",
                minimumValue: 0,
                title: "$$(NumericAxis_title_population)"
            }
        ],
        series: [
            {
                name: "1995Population",
                title: "1995",
                type: "column",
                isDropShadowEnabled: true,
                useSingleShadow: false,
                shadowColor: "#666666",
                isHighlightingEnabled: true,
                isTransitionInEnabled: true,
                xAxis: "NameAxis",
                yAxis: "PopulationAxis",
                valueMemberPath: "population1995",
                showTooltip: true
            },
            {
                name: "2005Population",
                title: "2005",
                type: "column",
                isDropShadowEnabled: true,
                useSingleShadow: false,
                shadowColor: "#666666",
                isHighlightingEnabled: true,
                isTransitionInEnabled: true,
                xAxis: "NameAxis",
                yAxis: "PopulationAxis",
                valueMemberPath: "population2005",
                showTooltip: true
            },
            {
                name: "categorySeries",
                type: "categoryToolTipLayer",
                useInterpolation: false,
                transitionDuration: 150
            },
            {
                name: "crosshairLayer",
                title: "crosshair",
                type: "crosshairLayer",
                useInterpolation: false,
                transitionDuration: 500
            }
        ]
    });
});
//# sourceMappingURL=typescript.js.map
