/// <reference path="../../js/typings/jquery.d.ts" />
/// <reference path="../../js/typings/jqueryui.d.ts" />
/// <reference path="../../js/typings/igniteui.d.ts" />
var PersonData = (function () {
    function PersonData(inName, inEmail, inAge) {
        this.name = inName;
        this.email = inEmail;
        this.age = inAge;
    }
    return PersonData;
})();

var people = [];
people.push(new PersonData("Gustavo Achong", "gachong@adventureworks.com", 45));
people.push(new PersonData("Catherine Abel", "cabel@adventureworks.com", 32));
people.push(new PersonData("Kim Abercrombie", "kabercrombie@adventureworks.com", 27));

$(function () {
    // Renders the table
    var renderTable = function (success, error) {
        var template = "<tr><td>${name}</td><td>${email}</td><td>${age}</td></tr>";
        if (success) {
            $("#table tbody").empty();
            $($.ig.tmpl(template, ds.dataView())).appendTo("#table tbody");
        } else {
            alert(error);
        }
    };

    //This code creates an $.ig.DataSource
    var ds = new $.ig.DataSource({
        dataSource: people,
        callback: renderTable
    });

    // Binds to the underlying data
    ds.dataBind();
});
//# sourceMappingURL=typescript.js.map
