/// <reference path="../../js/typings/jquery.d.ts" />
/// <reference path="../../js/typings/jqueryui.d.ts" />
/// <reference path="../../js/typings/igniteui.d.ts" />
//Sample data construction
//-----------------------------------------
var Product = (function () {
    function Product(productName, inQuantity) {
        this.name = productName;
        this.quantity = inQuantity;
    }
    return Product;
})();

var ProductContainer = (function () {
    function ProductContainer(productType, inProducts) {
        this.type = productType;
        this.products = inProducts;
    }
    return ProductContainer;
})();

var foods = [];
foods.push(new Product("$$(Bread)", 3));
foods.push(new Product("$$(Pizza)", 4));

var beverages = [];
beverages.push(new Product("$$(Milk)", 1));
beverages.push(new Product("$$(fruit_punch)", 4));

var sampleData = [];
sampleData.push(new ProductContainer("$$(Food)", foods));
sampleData.push(new ProductContainer("$$(Beverages)", beverages));

//-----------------------------------------
$(function () {
    $("#hierarchial-grid").igHierarchicalGrid({
        width: "100%",
        dataSource: sampleData,
        features: [
            {
                name: "Responsive",
                enableVerticalRendering: false,
                columnSettings: [
                    {
                        columnKey: "type",
                        classes: "ui-hidden-tablet"
                    }
                ]
            },
            {
                name: "RowSelectors",
                enableCheckBoxes: true,
                inherit: true
            },
            {
                name: "Selection",
                multipleSelection: true
            }
        ],
        autoGenerateColumns: false,
        primaryKey: "type",
        columns: [
            { key: "type", headerText: "$$(Type)", dataType: "string" }
        ],
        autoGenerateLayouts: false,
        columnLayouts: [
            {
                width: "100%",
                childrenDataProperty: "products",
                autoGenerateColumns: false,
                primaryKey: "name",
                columns: [
                    { key: "name", headerText: "$$(Northwind_Orders_Name)", dataType: "string", width: "70%" },
                    { key: "quantity", headerText: "$$(Northwind_Orders_Quantity)", dataType: "number", width: "30%" }
                ],
                features: [
                    {
                        name: "Responsive",
                        enableVerticalRendering: false,
                        columnSettings: [
                            {
                                columnKey: "name",
                                classes: "ui-hidden-tablet"
                            },
                            {
                                columnKey: "quantity",
                                classes: "ui-hidden-tablet"
                            }
                        ]
                    }
                ]
            }
        ]
    });
});
//# sourceMappingURL=typescript.js.map
