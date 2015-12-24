/// <reference path="../../js/typings/jquery.d.ts" />
/// <reference path="../../js/typings/jqueryui.d.ts" />
/// <reference path="../../js/typings/igniteui.d.ts" />
var ColorPicker = (function () {
    function ColorPicker(_min, _max) {
        this.brushes = ["#d9c616", "#d96f17", "#d1150c"];
        this.interval = (_max - _min) / (this.brushes.length - 1);
    }
    ColorPicker.prototype.getColorByIndex = function (val) {
        var index = Math.round(val / this.interval);
        if (index < 0) {
            index = 0;
        } else if (index > (this.brushes.length - 1)) {
            index = this.brushes.length - 1;
        }
        return this.brushes[index];
    };
    return ColorPicker;
})();

var colorPicker = new ColorPicker(100000, 500000000);

$(function () {
    $("#map").igMap({
        width: "700px",
        height: "500px",
        windowRect: { left: 0.1, top: 0.1, height: 0.7, width: 0.7 },
        overviewPlusDetailPaneVisibility: "visible",
        overviewPlusDetailPaneBackgroundImageUri: "../../images/samples/maps/world.png",
        series: [{
                type: "geographicShape",
                name: "worldCountries",
                markerType: "none",
                shapeMemberPath: "points",
                shapeDataSource: '../../data-files/shapes/world_countries_reg.shp',
                databaseSource: '../../data-files/shapes/world_countries_reg.dbf',
                opacity: 0.8,
                outlineThickness: 1,
                showTooltip: true,
                tooltipTemplate: "geoShapeTooltip",
                shapeStyleSelector: {
                    selectStyle: function (s, o) {
                        var pop = s.fields.item("POP2005");
                        var popInt = parseInt(pop);
                        var colString = colorPicker.getColorByIndex(popInt);
                        return {
                            fill: colString,
                            stroke: "gray"
                        };
                    }
                }
            }]
    });
});
//# sourceMappingURL=typescript.js.map
