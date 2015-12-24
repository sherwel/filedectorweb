/// <reference path="../../js/typings/jqueryui.d.ts" />
/// <reference path="../../js/typings/jquery.d.ts" />
/// <reference path="../../js/typings/igniteui.d.ts" />
$(function () {
    $("#grid1").igGrid({
        width: "100%",
        columns: [
            { headerText: "$$(AdventureWorks_Products_ProductID)", key: "ProductID", dataType: "number", width: "15%" },
            { headerText: "$$(AdventureWorks_Products_Name)", key: "Name", dataType: "string", width: "40%" },
            { headerText: "$$(AdventureWorks_Products_ProductNumber)", key: "ProductNumber", dataType: "string", width: "30%" },
            { headerText: "$$(AdventureWorks_Products_MakeFlag)", key: "MakeFlag", dataType: "bool", width: "15%" }
        ],
        dataSource: adventureWorks,
        features: [
            {
                name: "Paging"
            },
            {
                name: "Sorting"
            },
            {
                name: "Filtering"
            }
        ]
    });
});
//# sourceMappingURL=typescript.js.map
