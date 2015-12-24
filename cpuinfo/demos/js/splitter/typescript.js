/// <reference path="../../js/typings/jquery.d.ts" />
/// <reference path="../../js/typings/jqueryui.d.ts" />
/// <reference path="../../js/typings/igniteui.d.ts" />

$(function () {
    $("#splitter").igSplitter({
        height: "300px",
        panels: [{ size: 160, min: 100, max: 250 }]
    });
    $("#tree").igTree({
        dataSource: continentsWithCountries,
        bindings: {
            textKey: "Text",
            valueKey: "Text",
            childDataProperty: "Countries"
        }
    });
    $("#tree").on("igtreeselectionchanged", function (sender, eventArgs) {
        var node = eventArgs.selectedNodes[0];
        if (node.data.Description) {
            $("#splitter").igSplitter("secondPanel").html(node.data.Description);
        } else {
            $("#splitter").igSplitter("secondPanel").html("$$(notFound)");
        }
    });
});
//# sourceMappingURL=typescript.js.map
