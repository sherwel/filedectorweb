/// <reference path="../../js/typings/jquery.d.ts" />
/// <reference path="../../js/typings/jqueryui.d.ts" />
/// <reference path="../../js/typings/igniteui.d.ts" />
var Info = (function () {
    function Info(_description) {
        this.description = _description;
    }
    return Info;
})();

var CarData = (function () {
    function CarData(_name, _picture, _priceRange, _extras) {
        this.name = _name;
        this.picture = _picture;
        this.priceRange = _priceRange;
        this.extras = _extras;
    }
    CarData.prototype.addExtra = function (_extra) {
        this.extras.push(_extra);
    };
    return CarData;
})();

var Magarcedes = [];
Magarcedes.push(new CarData("2013 LSL AMG", "../../images/samples/tile-manager/car-dealership/shutterstock_139519967.jpg", "$199,500 - $206,000", [new Info("0-100 $$(in) 3.8 $$(seconds)"), new Info("$$(topSpeed): 317 $$(kmH)")]));
Magarcedes.push(new CarData("2013 363 AMG", "../../images/samples/tile-manager/car-dealership/shutterstock_38284540.jpg", "$57,130 - $61,430", [new Info("0-60 $$(in) 4.4 $$(seconds)"), new Info("$$(topSpeed): 250 $$(kmH)")]));
Magarcedes.push(new CarData("2013 T350", "../../images/samples/tile-manager/car-dealership/shutterstock_25369924.jpg", "$47,542 - $51,120", [new Info("4MATIC $$(awd)"), new Info("0-60 $$(in) 5.5 $$(seconds)"), new Info("3.5l v6 $$(engine)")]));
Magarcedes.push(new CarData("2013 500S", "../../images/samples/tile-manager/car-dealership/shutterstock_4417342.jpg", "$92,350 - $212,000", [new Info("$$(nightViewAssist)"), new Info("$$(parkingControl)")]));
Magarcedes.push(new CarData("2013 M350L", "../../images/samples/tile-manager/car-dealership/shutterstock_4028761.jpg", "$47,681 - $51,270", [new Info("3.0L BlueTEC $$(turboDiesel) v6 $$(engine)"), new Info("4MATIC $$(awd)")]));
Magarcedes.push(new CarData("2013 CSL", "../../images/samples/tile-manager/car-dealership/shutterstock_2564520.jpg", "$74,500 - $84,556", [new Info("4.6L v8 $$(engine)"), new Info("0-60 $$(in) 5.05 $$(seconds)")]));

var Hoida = [];
Hoida.push(new CarData("2013 Candy", "../../images/samples/tile-manager/car-dealership/shutterstock_57034834.jpg", "$21,661 - $29,404", [new Info("$$(gas) I4 2.5L $$(engine)"), new Info("$$(hwEfficiency) 35 $$(mpg)")]));
Hoida.push(new CarData("2013 RA4V 4WD", "../../images/samples/tile-manager/car-dealership/shutterstock_117299389.jpg", "$23,301 - $28,232", [new Info("$$(awd)"), new Info("$$(hwEfficiency) 29 $$(mpg)")]));
Hoida.push(new CarData("2013 Coralla", "../../images/samples/tile-manager/car-dealership/shutterstock_32589022.jpg", "$16,191 - $20,297", [new Info("$$(gas) I4 1.8L $$(engine)"), new Info("$$(hwEfficiency) 34 $$(mpg)")]));
Hoida.push(new CarData("2013 Pruis C", "../../images/samples/tile-manager/car-dealership/shutterstock_134383163.jpg", "$19,058 - $23,163", [new Info("$$(gasElectric) I4 1.5L $$(engine)"), new Info("$$(hwEfficiency) 46 $$(mpg)")]));
Hoida.push(new CarData("2013 Cruiser", "../../images/samples/tile-manager/car-dealership/shutterstock_60821281.jpg", "$73,676 - $73,676", [new Info("$$(gas) V8 5.7L $$(engine)"), new Info("$$(awd)")]));
Hoida.push(new CarData("2013 TLC", "../../images/samples/tile-manager/car-dealership/shutterstock_27395866.jpg", "$25,566 - $47,651", [new Info("$$(gas) V8 5.7L $$(engine)"), new Info("$$(hwEfficiency) 17 $$(mpg)")]));

var Paushe = [];
Paushe.push(new CarData("2013 CST", "../../images/samples/tile-manager/car-dealership/shutterstock_38288989.jpg", "$39,095 - $59,090", [
    new Info("$$(available) $$(awd)"), new Info("$$(available) $$(navigationWithVC)"),
    new Info("$$(leatherSeats)"), new Info("$$(remoteStart)")]));
Paushe.push(new CarData("2013 CST-V", "../../images/samples/tile-manager/car-dealership/shutterstock_32949850.jpg", "$64,515 - $74,770", [new Info("0-100 $$(in) 4.0 $$(seconds)"), new Info("$$(lateralAcceleration)")]));
Paushe.push(new CarData("2013 ECS", "../../images/samples/tile-manager/car-dealership/shutterstock_7391134.jpg", "$63,170 - $82,875", [new Info("$$(heatedSeats)"), new Info("$$(available) $$(mrc)")]));
Paushe.push(new CarData("2013 AST", "../../images/samples/tile-manager/car-dealership/shutterstock_23082346.jpg", "$39,095 - $59,090", [new Info("$$(available) $$(allNew) 272 $$(hp) 2.0L $$(turboCharged) $$(engine)"), new Info("$$(available) $$(navigation)")]));
Paushe.push(new CarData("2013 SXR Crossover", "../../images/samples/tile-manager/car-dealership/shutterstock_134383139.jpg", "$37,330 - $58,220", [new Info("$$(available) $$(ultraView) $$(sunroof)"), new Info("$$(available) $$(awd)")]));
Paushe.push(new CarData("2013 CST-V Wagon", "../../images/samples/tile-manager/car-dealership/shutterstock_117299326.jpg", "$64,515 - $75,345", [new Info("$$(pwrLiftMemoryHeight)"), new Info("$$(rearviewCamera)")]));

var Cars = [];
Cars.push(Magarcedes);
Cars.push(Hoida);
Cars.push(Paushe);

$(function () {
    var activated = [false, false, false, false], options = {
        columnWidth: 210,
        columnHeight: 210,
        marginLeft: 10,
        marginTop: 10,
        dataSource: Cars,
        items: [
            { rowIndex: 0, colIndex: 0, rowSpan: 2, colSpan: 2 },
            { rowIndex: 0, colIndex: 2, rowSpan: 1, colSpan: 1 },
            { rowIndex: 1, colIndex: 2, rowSpan: 1, colSpan: 1 },
            { rowIndex: 2, colIndex: 0, rowSpan: 1, colSpan: 1 },
            { rowIndex: 2, colIndex: 1, rowSpan: 1, colSpan: 1 },
            { rowIndex: 2, colIndex: 2, rowSpan: 1, colSpan: 1 }
        ],
        maximizedTileIndex: 0,
        maximizedState: '<figure><figcaption>${name}</figcaption><img src="${picture}" title="${Name}" alt="error" /></figure><ul><li>$$(price): ${priceRange}</li>' + '{{each ${extras} }}<li>${extras.description}</li>{{/each}}</ul>',
        minimizedState: '<figure><figcaption>${name}</figcaption><img src="${picture}" title="${Name}" alt="error" />'
    };

    // First time initialization of the tab that will be shown on page load
    options.dataSource = Cars[0];
    activated[0] = true;
    $('#magarcedesDashboard').igTileManager(options);

    $('#car-tabs').tabs({
        activate: function (event, ui) {
            var index = ui.newTab.index();
            if (!activated[index]) {
                options.dataSource = Cars[index];
                ui.newPanel.igTileManager(options);
                activated[index] = true;
            } else {
                ui.newPanel.igTileManager('reflow');
            }
        }
    });
});
//# sourceMappingURL=typescript.js.map
