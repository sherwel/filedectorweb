/// <reference path="../../js/typings/jquery.d.ts" />
/// <reference path="../../js/typings/jqueryui.d.ts" />
/// <reference path="../../js/typings/igniteui.d.ts" />
var Department = (function () {
    function Department(inDepartmentName, inBudget) {
        this.departmentName = inDepartmentName;
        this.budget = inBudget;
    }
    return Department;
})();

var departments = [];
departments.push(new Department("$$(Chart_lbl_administration)", 30));
departments.push(new Department("$$(Chart_lbl_sales)", 50));
departments.push(new Department("$$(Chart_lbl_it)", 60));
departments.push(new Department("$$(Chart_lbl_marketing)", 50));
departments.push(new Department("$$(Chart_lbl_development)", 100));
departments.push(new Department("$$(Chart_lbl_support)", 20));

var selectedSlicesNormal = [];
var selectedSlicesWeighted = [];

$(function () {
    //  Create a basic funnel chart
    $("#chartNormal").igFunnelChart({
        width: "100%",
        height: "500px",
        dataSource: departments,
        valueMemberPath: "budget",
        innerLabelMemberPath: "budget",
        innerLabelVisibility: "visible",
        outerLabelMemberPath: "departmentName",
        outerLabelVisibility: "visible",
        allowSliceSelection: true,
        useUnselectedStyle: true,
        sliceClicked: function (evt, ui) {
            if (ui.selected) {
                selectedSlicesNormal.push(ui.item);
            } else {
                var index = selectedSlicesNormal.indexOf(ui.item, 0);
                if (index != undefined) {
                    selectedSlicesNormal.splice(index, 1);
                }
            }
            $("#selectedSlicesGrid1").igGrid("dataBind");
        },
        selectedSliceStyle: {
            fill: "lightblue",
            stroke: "black"
        },
        unselectedSliceStyle: {
            fill: "lightgrey",
            stroke: "grey"
        }
    });

    //  Instantiate the selected slices grid for the basic funnel chart
    $("#selectedSlicesGrid1").igGrid({
        dataSource: selectedSlicesNormal,
        columns: [
            { key: "departmentName", headerText: "$$(Department)", width: "130px" },
            { key: "budget", headerText: "$$(Budget)", width: "70px" }
        ]
    });

    //  Create a funnel chart with weighted size slices
    $("#chartWeighted").igFunnelChart({
        width: "100%",
        height: "500px",
        leftMargin: 20,
        dataSource: departments,
        outerLabelAlignment: "right",
        valueMemberPath: "budget",
        innerLabelMemberPath: "budget",
        innerLabelVisibility: "visible",
        outerLabelMemberPath: "departmentName",
        outerLabelVisibility: "visible",
        funnelSliceDisplay: "weighted",
        allowSliceSelection: true,
        useUnselectedStyle: true,
        sliceClicked: function (evt, ui) {
            if (ui.selected) {
                selectedSlicesWeighted.push(ui.item);
            } else {
                var index = selectedSlicesWeighted.indexOf(ui.item, 0);
                if (index != undefined) {
                    selectedSlicesWeighted.splice(index, 1);
                }
            }
            $("#selectedSlicesGrid2").igGrid("dataBind");
        },
        selectedSliceStyle: {
            fill: "lightblue",
            stroke: "black"
        },
        unselectedSliceStyle: {
            fill: "lightgrey",
            stroke: "grey"
        }
    });

    //  Instantiate the selected slices grid for the funnel chart with weighted slices
    $("#selectedSlicesGrid2").igGrid({
        dataSource: selectedSlicesWeighted,
        columns: [
            { key: "departmentName", headerText: "$$(Department)", width: "130px" },
            { key: "budget", headerText: "$$(Budget)", width: "70px" }
        ]
    });
});
//# sourceMappingURL=typescript.js.map
