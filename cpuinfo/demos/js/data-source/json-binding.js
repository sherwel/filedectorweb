/// <reference path="../../js/typings/jqueryui.d.ts" />
/// <reference path="../../js/typings/jquery.d.ts" />
/// <reference path="../../js/typings/igniteui.d.ts" />
var data = [
    { "Name": "John Smith", "Age": 45 },
    { "Name": "Mary Johnson", "Age": 32 },
    { "Name": "Bob Ferguson", "Age": 27 }
];

// Renders the table
var renderTable = function (success, error) {
    var template = "<tr><td>${Name}</td><td>${Age}</td></tr>";
    if (success) {
        $("#table tbody").empty();
        $($.ig.tmpl(template, ds.dataView())).appendTo("#table tbody");
    } else {
        alert(error);
    }
};

$(function () {
    ds = new $.ig.DataSource({ dataSource: adventureWorks, callback: renderTable });
    ds.dataBind();
});
//# sourceMappingURL=json-binding.js.map
