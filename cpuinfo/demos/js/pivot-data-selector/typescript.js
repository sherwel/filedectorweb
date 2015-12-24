/// <reference path="../../js/typings/jquery.d.ts" />
/// <reference path="../../js/typings/jqueryui.d.ts" />
/// <reference path="../../js/typings/igniteui.d.ts" />
var SelectorProduct1 = (function () {
    function SelectorProduct1(category, sellerName, country, city, date, unitPrice, unitsSold) {
        this.ProductCategory = category;
        this.SellerName = sellerName;
        this.Country = country;
        this.City = city;
        this.Date = date;
        this.UnitPrice = unitPrice;
        this.UnitsSold = unitsSold;
    }
    return SelectorProduct1;
})();

var dataSelector = [];
dataSelector.push(new SelectorProduct1("Clothing", "Stanley Brooker", "Bulgaria", "Plovdiv", "01/01/2012", 12.81, 282));
dataSelector.push(new SelectorProduct1("Clothing", "Elisa Longbottom", "US", "New York", "01/05/2013", 49.57, 296));
dataSelector.push(new SelectorProduct1("Bikes", "Lydia Burson", "Uruguay", "Ciudad de la Costa", "01/06/2011", 3.56, 68));
dataSelector.push(new SelectorProduct1("Accessories", "David Haley", "UK", "London", "04/07/2012", 85.58, 293));
dataSelector.push(new SelectorProduct1("Components", "John Smith", "Japan", "Yokohama", "12/08/2012", 18.13, 240));
dataSelector.push(new SelectorProduct1("Clothing", "Larry Lieb", "Uruguay", "Ciudad de la Costa", "05/12/2011", 68.33, 456));
dataSelector.push(new SelectorProduct1("Components", "Walter Pang", "Bulgaria", "Sofia", "02/19/2013", 16.05, 492));

var dataSource = new $.ig.OlapFlatDataSource({
    dataSource: dataSelector,
    metadata: {
        cube: {
            name: "Sales",
            caption: "$$(Sales)",
            measuresDimension: {
                caption: "$$(Measures)",
                measures: [{
                        caption: "$$(UnitsSold)", name: "UnitsSold",
                        // returns a function that will be used as sum aggregator on the 'UnitsSold property' of the data objects
                        aggregator: $.ig.OlapUtilities.prototype.sumAggregator('UnitsSold')
                    }]
            },
            dimensions: [
                {
                    caption: "$$(Seller)", name: "Seller", hierarchies: [{
                            caption: "$$(Seller)", name: "Seller", levels: [
                                {
                                    name: "AllSellers", caption: "$$(AllSellers)",
                                    memberProvider: function (item) {
                                        return "$$(AllSellers)";
                                    }
                                },
                                {
                                    name: "SellerName", caption: "$$(Seller)",
                                    memberProvider: function (item) {
                                        return item.SellerName;
                                    }
                                }]
                        }]
                },
                {
                    caption: "$$(Date)", name: "Date", /*displayFolder: "Folder1\\Folder2",*/ hierarchies: [
                        $.ig.OlapUtilities.prototype.getDateHierarchy("Date", ["year", "quarter", "month", "date"], "Dates", "$$(Date)", ["$$(Year)", "$$(Quarter)", "$$(Month)", "$$(Day)"], "$$(AllPeriods)")
                    ]
                }
            ]
        }
    },
    // Preload hierarchies for the rows, columns, filters and measures
    rows: "[Date].[Dates]",
    columns: "[Seller].[Seller]",
    measures: "[Measures].[UnitsSold]"
});

$(function () {
    $('#dataSelector').igPivotDataSelector({
        dataSource: dataSource,
        height: "565px",
        width: "230px"
    });

    $("#pivotGrid").igPivotGrid({
        dataSource: dataSource,
        height: "565px",
        width: "720px"
    });
});
//# sourceMappingURL=typescript.js.map
