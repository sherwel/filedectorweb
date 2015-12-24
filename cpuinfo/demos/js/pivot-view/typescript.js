/// <reference path="../../js/typings/jquery.d.ts" />
/// <reference path="../../js/typings/jqueryui.d.ts" />
/// <reference path="../../js/typings/igniteui.d.ts" />
var SelectorProduct3 = (function () {
    function SelectorProduct3(category, sellerName, country, city, date, unitPrice, unitsSold) {
        this.category = category;
        this.sellerName = sellerName;
        this.country = country;
        this.city = city;
        this.date = date;
        this.unitPrice = unitPrice;
        this.unitsSold = unitsSold;
        this.ProductCategory = category;
        this.SellerName = sellerName;
        this.Country = country;
        this.City = city;
        this.Date = date;
        this.UnitPrice = unitPrice;
        this.UnitsSold = unitsSold;
    }
    return SelectorProduct3;
})();

var dataView = [];
dataView.push(new SelectorProduct3("$$(Clothing)", "Stanley Brooker", "Bulgaria", "Plovdiv", "01/01/2012", 12.81, 282));
dataView.push(new SelectorProduct3("$$(Clothing)", "Elisa Longbottom", "US", "New York", "01/05/2013", 49.57, 296));
dataView.push(new SelectorProduct3("$$(Bikes)", "Lydia Burson", "Uruguay", "Ciudad de la Costa", "01/06/2011", 3.56, 68));
dataView.push(new SelectorProduct3("$$(Accessories)", "David Haley", "UK", "London", "04/07/2012", 85.58, 293));
dataView.push(new SelectorProduct3("$$(Components)", "John Smith", "Japan", "Yokohama", "12/08/2012", 18.13, 240));
dataView.push(new SelectorProduct3("$$(Clothing)", "Larry Lieb", "Uruguay", "Ciudad de la Costa", "05/12/2011", 68.33, 456));
dataView.push(new SelectorProduct3("$$(Components)", "Walter Pang", "Bulgaria", "Sofia", "02/19/2013", 16.05, 492));

function saleValueCalculator(items, cellMetadata) {
    var sum = 0;
    $.each(items, function (index, item) {
        sum += item.UnitPrice * item.UnitsSold;
    });
    return (Math.round(sum * 10) / 10).toFixed(2);
}
;

dataSource = new $.ig.OlapFlatDataSource({
    dataSource: dataView,
    metadata: {
        cube: {
            name: "Sales",
            caption: "$$(Sales)",
            measuresDimension: {
                caption: "$$(Measures)",
                measures: [
                    {
                        caption: "$$(UnitsSold)", name: "UnitsSold",
                        aggregator: $.ig.OlapUtilities.prototype.sumAggregator('UnitsSold')
                    },
                    {
                        caption: "$$(UnitPrice)", name: "UnitPrice",
                        aggregator: $.ig.OlapUtilities.prototype.sumAggregator('UnitPrice')
                    },
                    {
                        caption: "$$(SaleValue)", name: "SaleValue", aggregator: saleValueCalculator
                    }]
            },
            dimensions: [
                {
                    caption: "$$(Date)", name: "Date", /*displayFolder: "Folder1\\Folder2",*/ hierarchies: [
                        $.ig.OlapUtilities.prototype.getDateHierarchy("Date", ["year", "quarter", "month", "date"], "Dates", "$$(Date)", ["$$(Year)", "$$(Quarter)", "$$(Month)", "$$(Day)"], "$$(AllPeriods)")
                    ]
                },
                {
                    caption: "$$(Location)", name: "Location", hierarchies: [{
                            caption: "$$(Location)", name: "Location", levels: [
                                {
                                    name: "AllLocations", caption: "$$(AllLocations)",
                                    memberProvider: function (item) {
                                        return "$$(AllLocations)";
                                    }
                                },
                                {
                                    name: "Country", caption: "$$(Country)",
                                    memberProvider: function (item) {
                                        return item.Country;
                                    }
                                },
                                {
                                    name: "City", caption: "$$(City)",
                                    memberProvider: function (item) {
                                        return item.City;
                                    }
                                }]
                        }]
                },
                {
                    caption: "$$(Product)", name: "Product", hierarchies: [{
                            caption: "$$(Product)", name: "Product", levels: [
                                {
                                    name: "AllProducts", caption: "$$(AllProducts)",
                                    memberProvider: function (item) {
                                        return "$$(AllProducts)";
                                    }
                                },
                                {
                                    name: "ProductCategory", caption: "$$(Category)",
                                    memberProvider: function (item) {
                                        return item.ProductCategory;
                                    }
                                }]
                        }]
                },
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
                }]
        }
    },
    rows: "[Date].[Dates]",
    columns: "[Product].[Product]",
    measures: "[Measures].[UnitsSold]"
});

$(function () {
    $("#pivotView").igPivotView({
        dataSource: dataSource
    });
});
//# sourceMappingURL=typescript.js.map
