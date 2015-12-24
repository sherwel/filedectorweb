/// <reference path="../../js/typings/jquery.d.ts" />
/// <reference path="../../js/typings/jqueryui.d.ts" />
/// <reference path="../../js/typings/igniteui.d.ts" />
$(function () {
    $("#bulletgraph1").igBulletGraph({
        width: "100%",
        height: "80px",
        ranges: [
            {
                brush: '#803E01',
                name: '$$(ToolTipSettings_Bad)',
                startValue: 0,
                endValue: 3000
            },
            {
                brush: '#BA5A05',
                name: '$$(ToolTipSettings_Acceptable)',
                startValue: 3000,
                endValue: 4000
            },
            {
                brush: '#FF7A04',
                name: '$$(ToolTipSettings_Good)',
                startValue: 4000,
                endValue: 10000
            }
        ],
        minimumValue: 0,
        maximumValue: 10000,
        value: 5000,
        valueInnerExtent: 0.5,
        valueOuterExtent: 0.65,
        targetValue: 6000,
        targetValueBreadth: 12,
        showToolTip: true,
        formatLabel: function (evt, ui) {
            ui.label += "K";
        }
    });

    $("#bulletgraph2").igBulletGraph({
        width: "100%",
        height: "80px",
        ranges: [
            {
                brush: '#566509',
                name: '$$(ToolTipSettings_Bad)',
                startValue: 0,
                endValue: 250
            },
            {
                brush: '#7F950C',
                name: '$$(ToolTipSettings_Acceptable)',
                startValue: 250,
                endValue: 300
            },
            {
                brush: '#AABF31',
                name: '$$(ToolTipSettings_Good)',
                startValue: 300,
                endValue: 500
            }
        ],
        minimumValue: 0,
        maximumValue: 500,
        value: 350,
        valueInnerExtent: 0.35,
        valueOuterExtent: 0.8,
        targetValue: 400,
        showToolTip: true,
        formatLabel: function (evt, ui) {
            ui.label += "K";
        }
    });

    $("#bulletgraph3").igBulletGraph({
        width: "100%",
        height: "80px",
        ranges: [
            {
                brush: '#11364D',
                name: '$$(ToolTipSettings_Bad)',
                startValue: 0,
                endValue: 5
            },
            {
                brush: '#164F6D',
                name: '$$(ToolTipSettings_Acceptable)',
                startValue: 5,
                endValue: 20
            },
            {
                brush: '#20789F',
                name: '$$(ToolTipSettings_Good)',
                startValue: 20,
                endValue: 100
            }
        ],
        maximumValue: 100,
        value: 15,
        targetValue: 25,
        valueBrush: "#B3E0F7",
        targetValueBrush: "#B3E0F7",
        targetValueOutline: "#B3E0F7",
        showToolTip: true,
        formatLabel: function (evt, ui) {
            ui.label = ui.value + "%";
        }
    });
});
//# sourceMappingURL=typescript.js.map
