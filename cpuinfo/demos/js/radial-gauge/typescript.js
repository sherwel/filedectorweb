/// <reference path="../../js/typings/jquery.d.ts" />
/// <reference path="../../js/typings/jqueryui.d.ts" />
/// <reference path="../../js/typings/igniteui.d.ts" />
$(function () {
    $("#radialgauge").igRadialGauge({
        height: "350px",
        width: "100%",
        transitionDuration: 100,
        ranges: [{
                name: "range1",
                brush: "rgba(164, 189, 41, 1)",
                startValue: 70,
                endValue: 100,
                outerStartExtent: 0.55,
                outerEndExtent: 0.65
            }]
    });

    var lastPointX = 0, lastPointY = 0, lastValue = 0, isDragging = false;

    // Start the needle drag only on a mousedown on the needle
    document.getElementById("radialgauge").addEventListener("mousedown", function (e) {
        dragNeedle(e, true);
    });

    // Drag the needle to the new point only if the point being dragged to is inside the needle
    document.addEventListener("mousemove", function (e) {
        dragNeedle(e, false);
    });

    // Drag the needle to the final new point only if the point being dragged to is inside the needle
    document.addEventListener("mouseup", function (e) {
        dragNeedle(e, false);
        isDragging = false;
    });

    // Function that performs the needle drag/tap to the new point
    function dragNeedle(e, isMouseDown) {
        if (!isMouseDown && !isDragging) {
            return;
        }

        e.preventDefault();
        var pointX = e.pageX - $("#radialgauge").offset().left;
        var pointY = e.pageY - $("#radialgauge").offset().top;
        if (isMouseDown) {
            var isClickPointValid = $("#radialgauge").igRadialGauge("needleContainsPoint", pointX, pointY);
            if (isClickPointValid) {
                lastPointX = pointX;
                lastPointY = pointY;
            } else {
                isClickPointValid = $("#radialgauge").igRadialGauge("needleContainsPoint", (pointX + 4 * lastPointX) / 5, (pointY + 4 * lastPointY) / 5);
            }
            if (isClickPointValid)
                isDragging = true;
            return;
        }

        var value = $("#radialgauge").igRadialGauge("getValueForPoint", pointX, pointY);
        if (isNaN(value))
            return;

        // Prevent needle from dragging beyond the scale bounds
        var minimumValue = $("#radialgauge").igRadialGauge("option", "minimumValue");
        var maximumValue = $("#radialgauge").igRadialGauge("option", "maximumValue");

        var startValue = minimumValue <= maximumValue ? minimumValue : maximumValue;
        var endValue = minimumValue > maximumValue ? minimumValue : maximumValue;
        if (value < startValue || value > endValue)
            return;

        $("#radialgauge").igRadialGauge("option", "value", value);
    }
});
//# sourceMappingURL=typescript.js.map
