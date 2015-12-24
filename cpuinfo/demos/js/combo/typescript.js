/// <reference path="../../js/typings/jquery.d.ts" />
/// <reference path="../../js/typings/jqueryui.d.ts" />
/// <reference path="../../js/typings/igniteui.d.ts" />
var MountainTop = (function () {
    function MountainTop(inId, inMountanName, inCountry, inHeight) {
        this.id = inId;
        this.mountainName = inMountanName;
        this.country = inCountry;
        this.height = inHeight;
    }
    return MountainTop;
})();

var mountainTopsData = [];
mountainTopsData.push(new MountainTop(1, "Everest", "Nepal/Tibet", 29.035));
mountainTopsData.push(new MountainTop(2, "K2 (Mount Godwin Austen)", "Pakistan/China", 29.250));
mountainTopsData.push(new MountainTop(3, "Kangchenjunga", "India/Nepal", 28.169));
mountainTopsData.push(new MountainTop(4, "Lhotse", "Nepal/Tibet", 27.940));
mountainTopsData.push(new MountainTop(5, "Makalu", "Nepal/Tibet", 27.766));
mountainTopsData.push(new MountainTop(6, "Cho Oyu", "Nepal/Tibet", 26.906));
mountainTopsData.push(new MountainTop(7, "Dhaulagiri", "Nepal", 26.795));
mountainTopsData.push(new MountainTop(8, "Manaslu", "Nepal", 26.781));
mountainTopsData.push(new MountainTop(9, "Nanga Parbat", "Pakistan", 26.660));
mountainTopsData.push(new MountainTop(10, "Annapurna", "Nepal", 26.545));

$(function () {
    $("#keyNavigationCombo").igCombo({
        width: "270px",
        textKey: "mountainName",
        valueKey: "id",
        dataSource: mountainTopsData,
        multiSelection: {
            enabled: true
        }
    });

    $("#checkboxSelectCombo").igCombo({
        width: "270px",
        dataSource: mountainTopsData,
        textKey: "mountainName",
        valueKey: "id",
        multiSelection: {
            enabled: true,
            showCheckboxes: true
        }
    });

    $("#filterContainsCombo").igCombo({
        width: "270px",
        textKey: "mountainName",
        valueKey: "mountainName",
        dataSource: mountainTopsData,
        filteringType: "local",
        filteringCondition: "contains",
        highlightMatchesMode: "contains"
    });
});
//# sourceMappingURL=typescript.js.map
