/// <reference path="../../js/typings/jquery.d.ts" />
/// <reference path="../../js/typings/jqueryui.d.ts" />
/// <reference path="../../js/typings/igniteui.d.ts" />
var SelectorProduct2 = (function () {
    function SelectorProduct2(category, sellerName, country, city, date, unitPrice, unitsSold) {
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
    return SelectorProduct2;
})();

var dataGrid = [];
dataGrid.push(new SelectorProduct2("$$(Clothing)", "Stanley Brooker", "Bulgaria", "Plovdiv", "01/01/2012", 12.81, 282));
dataGrid.push(new SelectorProduct2("$$(Clothing)", "Elisa Longbottom", "US", "New York", "01/05/2013", 49.57, 296));
dataGrid.push(new SelectorProduct2("$$(Bikes)", "Lydia Burson", "Uruguay", "Ciudad de la Costa", "01/06/2011", 3.56, 68));
dataGrid.push(new SelectorProduct2("$$(Accessories)", "David Haley", "UK", "London", "04/07/2012", 85.58, 293));
dataGrid.push(new SelectorProduct2("$$(Components)", "John Smith", "Japan", "Yokohama", "12/08/2012", 18.13, 240));
dataGrid.push(new SelectorProduct2("$$(Clothing)", "Larry Lieb", "Uruguay", "Ciudad de la Costa", "05/12/2011", 68.33, 456));
dataGrid.push(new SelectorProduct2("$$(Components)", "Walter Pang", "Bulgaria", "Sofia", "02/19/2013", 16.05, 492));

var dataSource = new $.ig.OlapFlatDataSource({
    dataSource: dataGrid,
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
                        aggregator: $.ig.OlapUtilities.prototype.sumAggregator('UnitPrice', 2)
                    }]
            },
            dimensions: [
                {
                    caption: "$$(Date)", name: "Date", hierarchies: [
                        $.ig.OlapUtilities.prototype.getDateHierarchy("Date", ["year", "quarter", "month", "date"], "Dates", "$$(Date)", ["$$(Year)", "$$(Quarter)", "$$(Month)", "$$(Day)"], "$$(AllPeriods)")
                    ]
                },
                {
                    caption: "$$(Location)", name: "Location", hierarchies: [{
                            caption: "$$(Location)", name: "Location", levels: [
                                { name: "AllLocations", caption: "$$(AllLocations)", memberProvider: function (item) {
                                        return "$$(AllLocations)";
                                    } },
                                { name: "Country", caption: "$$(Country)", memberProvider: function (item) {
                                        return item.Country;
                                    } },
                                { name: "City", caption: "$$(City)", memberProvider: function (item) {
                                        return item.City;
                                    } }]
                        }]
                },
                {
                    caption: "$$(Product)", name: "Product", hierarchies: [{
                            caption: "$$(Product)", name: "Product", levels: [
                                { name: "AllProducts", caption: "$$(AllProducts)", memberProvider: function (item) {
                                        return "$$(AllProducts)";
                                    } },
                                { name: "ProductCategory", caption: "$$(Category)", memberProvider: function (item) {
                                        return item.ProductCategory;
                                    } }]
                        }]
                },
                {
                    caption: "$$(Seller)", name: "Seller", hierarchies: [{
                            caption: "$$(Seller)", name: "Seller", levels: [
                                { name: "AllSellers", caption: "$$(AllSellers)", memberProvider: function (item) {
                                        return "$$(AllSellers)";
                                    } },
                                { name: "SellerName", caption: "$$(Seller)", memberProvider: function (item) {
                                        return item.SellerName;
                                    } }]
                        }]
                }
            ]
        }
    },
    rows: "[Date].[Dates]",
    columns: "[Product].[Product]",
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
        width: "720px",
        allowSorting: true,
        allowHeaderRowsSorting: true,
        allowHeaderColumnsSorting: true,
        firstSortDirection: "ascending",
        firstLevelSortDirection: "ascending",
        levelSortDirections: [
            { levelUniqueName: "[Product].[Product].[ProductCategory]" }
        ]
    });
});
//# sourceMappingURL=typescript.js.map
