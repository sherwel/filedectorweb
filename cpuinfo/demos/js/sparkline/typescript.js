/// <reference path="../../js/typings/jquery.d.ts" />
/// <reference path="../../js/typings/jqueryui.d.ts" />
/// <reference path="../../js/typings/igniteui.d.ts" />
var SparkElem = (function () {
    function SparkElem(_price) {
        this.Price = _price;
    }
    return SparkElem;
})();

//Creates an array of generated SparkElem types and that array is used as data for the Sparkline.
function generateArray() {
    var generatedArray = [];
    for (var i = 0; i < 100; i++) {
        var generatedNumber;
        if (i < 50) {
            generatedNumber = (i % 10) * (i % 5) * (i / 5 - 1) * i;
        } else {
            generatedNumber = (i % 10) * (i % 5) * (i / 5 - 2) * (100 - i);
        }

        generatedArray.push(new SparkElem(generatedNumber));
    }

    return generatedArray;
}

$(function () {
    $("#sparkline").igSparkline({
        dataSource: generateArray(),
        height: "100px",
        width: "500px",
        valueMemberPath: 'Price',
        normalRangeVisibility: "visible",
        normalRangeMinimum: 200,
        normalRangeMaximum: 600,
        trendLineType: "simpleAverage"
    });
});
//# sourceMappingURL=typescript.js.map
