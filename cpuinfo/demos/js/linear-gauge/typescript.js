/// <reference path="../../js/typings/jquery.d.ts" />
/// <reference path="../../js/typings/jqueryui.d.ts" />
/// <reference path="../../js/typings/igniteui.d.ts" />
$(function () {
    $("#linearGauge").igLinearGauge({
        height: "80px",
        width: "100%",
        value: -148,
        minimumValue: -275,
        maximumValue: 0,
        ranges: [
            {
                startValue: -275,
                endValue: -200,
                name: "$$(Range)1"
            },
            {
                startValue: -200,
                endValue: -137,
                name: "$$(Range)2"
            },
            {
                startValue: -137,
                endValue: -55,
                name: "$$(Range)3"
            },
            {
                startValue: -55,
                endValue: 0,
                name: "$$(Range)4"
            }
        ],
        needleShape: 'custom',
        needleBrush: '#99D4FD',
        needleOutline: '#11364D',
        needleBreadth: 20,
        needleInnerExtent: 0.3,
        needleOuterExtent: 0.7,
        needleOuterPointExtent: 0.9,
        needleInnerPointExtent: 0.3,
        needleInnerPointWidth: 0,
        needleOuterPointWidth: 0.3,
        needleInnerBaseWidth: 0,
        needleOuterBaseWidth: 0.07,
        showToolTip: true
    });

    var lastPointX = 0, lastPointY = 0, lastValue = 0, isDragging = false;

    // Start the needle drag only on a mousedown on the needle
    document.getElementById("linearGauge").addEventListener("mousedown", function (e) {
        dragNeedle(e, true);
    });

    // Drag the needle to the new point only if the point being dragged to is inside the needle
    document.addEventListener("mousemove", function (e) {
        dragNeedle(e, false);
    });

    // Drag the needle to the final new point only if the point being dragged to is inside the needle
    document.addEventListener("mouseup", function (e) {
        isDragging = false;
        dragNeedle(e, false);
    });

    // Function that performs the needle drag/tap to the new point
    function dragNeedle(e, isMouseDown) {
        if (!isMouseDown && !isDragging) {
            return;
        }

        e.preventDefault();
        var pointX = e.pageX - $("#linearGauge").offset().left;
        var pointY = e.pageY - $("#linearGauge").offset().top;
        if (isMouseDown) {
            var isClickPointValid = $("#linearGauge").igLinearGauge("needleContainsPoint", pointX, pointY);
            if (isClickPointValid) {
                lastPointX = pointX;
                lastPointY = pointY;
            } else {
                isClickPointValid = $("#linearGauge").igLinearGauge("needleContainsPoint", (pointX + 4 * lastPointX) / 5, (pointY + 4 * lastPointY) / 5);
            }
            isDragging = true;
            if (!isClickPointValid) {
                isDragging = false;
                return;
            }
        }

        var value = $("#linearGauge").igLinearGauge("getValueForPoint", pointX, pointY);
        if (isNaN(value))
            return;

        // Prevent needle from dragging beyond the scale bounds
        var minimumValue = $("#linearGauge").igLinearGauge("option", "minimumValue");
        var maximumValue = $("#linearGauge").igLinearGauge("option", "maximumValue");

        var startValue = minimumValue <= maximumValue ? minimumValue : maximumValue;
        var endValue = minimumValue > maximumValue ? minimumValue : maximumValue;

        if (value > startValue && value < endValue) {
            $("#linearGauge").igLinearGauge("option", "value", value);
        } else {
            value = value >= endValue ? endValue : startValue;
            $("#linearGauge").igLinearGauge("option", "value", value);
        }
    }
});
//# sourceMappingURL=typescript.js.map
