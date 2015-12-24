/// <reference path="../../js/typings/jquery.d.ts" />
/// <reference path="../../js/typings/jqueryui.d.ts" />
/// <reference path="../../js/typings/igniteui.d.ts" />
$(function () {
    $("#rating").igRating({
        voteCount: 10,
        valueAsPercent: true,
        value: 0.4,
        valueChange: function (evt, ui) {
            $("#currValue").igTextEditor("value", ui.value);
        }
    });

    $("#currValue").igTextEditor({
        width: "100px",
        value: 0.4
    });

    $("#selectPrecision").igCombo({
        enableClearButton: false,
        mode: "dropdown",
        selectionChanged: function (evt, ui) {
            if ($.isArray(ui.items) && ui.items[0] != undefined) {
                $("#rating").igRating("option", "precision", ui.items[0].data.value);
            }
        }
    });

    $("#chkPercent").change(function () {
        $("#rating").igRating("option", "valueAsPercent", $(this).is(":checked"));
        $("#currValue").igTextEditor("value", $("#rating").igRating("value"));
    });
});
//# sourceMappingURL=typescript.js.map
