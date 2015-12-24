/// <reference path="../../js/typings/jquery.d.ts" />
/// <reference path="../../js/typings/jqueryui.d.ts" />
/// <reference path="../../js/typings/igniteui.d.ts" />
$(function () {
    $("#datePicker1").igDatePicker({
        width: 270,
        dateInputFormat: 'dateLong',
        numberOfMonths: [1, 2],
        showAnim: 'clip',
        duration: 1000,
        validatorOptions: {
            onblur: true,
            onchange: false,
            onsubmit: true,
            formSubmit: true,
            keepFocus: "always",
            showIcon: true
        }
    });

    $("#datePicker2").igDatePicker({
        width: 270,
        dateInputFormat: 'dateTime',
        minValue: new Date(2015, 6, 3),
        maxValue: new Date(2015, 6, 24),
        showAnim: 'clip',
        duration: 1000,
        nullText: "Pick Date",
        required: true,
        validatorOptions: {
            onblur: false,
            onchange: true,
            onsubmit: true,
            formSubmit: true,
            keepFocus: "never",
            showIcon: false
        }
    });
});
//# sourceMappingURL=typescript.js.map
