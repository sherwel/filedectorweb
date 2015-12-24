/// <reference path="../../js/typings/jquery.d.ts" />
/// <reference path="../../js/typings/jqueryui.d.ts" />
/// <reference path="../../js/typings/igniteui.d.ts" />
$(function () {
    $("#barcode").igQRCodeBarcode({
        height: "300px",
        width: "100%",
        data: "http://www.infragistics.com/products/jquery/samples"
    });

    $("#dataInput").igTextEditor({
        width: "300px",
        value: "http://www.infragistics.com/products/jquery/help"
    });

    $("#setButton").click(function () {
        $("#barcode").igQRCodeBarcode("option", "data", $("#dataInput").igTextEditor("value"));
    });

    $("#encodingMode").igCombo({
        enableClearButton: false,
        mode: "dropdown",
        selectionChanged: function (evt, ui) {
            if ($.isArray(ui.items) && ui.items[0] != undefined) {
                $("#barcode").igQRCodeBarcode("option", "encodingMode", ui.items[0].data.value);
            }
        }
    });

    $("#eciHeaderDisplayMode").igCombo({
        enableClearButton: false,
        mode: "dropdown",
        selectionChanged: function (evt, ui) {
            if ($.isArray(ui.items) && ui.items[0] != undefined) {
                $("#barcode").igQRCodeBarcode("option", "eciHeaderDisplayMode", ui.items[0].data.value);
            }
        }
    });
});
//# sourceMappingURL=typescript.js.map
