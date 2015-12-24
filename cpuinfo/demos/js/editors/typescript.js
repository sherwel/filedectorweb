/// <reference path="../../js/typings/jquery.d.ts" />
/// <reference path="../../js/typings/jqueryui.d.ts" />
/// <reference path="../../js/typings/igniteui.d.ts" />
$(function () {
    $("#textEditor").igTextEditor({
        width: "200",
        value: "John"
    });

    $("#dateTimeEditor").igDateEditor({
        width: "200",
        dateInputFormat: "dateTime",
        value: new Date()
    });

    $("#jaDatePicker").igDatePicker({
        width: "200",
        value: new Date(),
        readOnly: true,
        dropDownOnReadOnly: true,
        dateDisplayFormat: "dateLong",
        regional: "ja"
    });

    $("#currencyEditor").igCurrencyEditor({
        width: "200",
        value: -8709.98,
        negativePattern: "$ -n",
        postivePattern: "$ n",
        regional: "en-US"
    });

    $("#maskEditor").igMaskEditor({
        width: "200",
        inputMask: 'AaaL/aa',
        dataMode: 'rawTextWithRequiredPromptsAndLiterals'
    });

    $("#percentEditor").igPercentEditor({
        width: "200",
        value: "42",
        displayFactor: 1
    });
});
//# sourceMappingURL=typescript.js.map
