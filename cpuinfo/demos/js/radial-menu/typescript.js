/// <reference path="../../js/typings/jquery.d.ts" />
/// <reference path="../../js/typings/jqueryui.d.ts" />
/// <reference path="../../js/typings/igniteui.d.ts" />
$(function () {
    function toggleBold() {
        $("#htmlEditor").igHtmlEditor("executeAction", "bold");
        var cbElement = document.getElementById("cbCloseOnClick");
        if (cbElement && cbElement.checked) {
            $("#radialMenu").igRadialMenu("option", "isOpen", false);
        }
    }

    function toggleItalic() {
        $("#htmlEditor").igHtmlEditor("executeAction", "italic");
        var cbElement = document.getElementById("cbCloseOnClick");
        if (cbElement && cbElement.checked) {
            $("#radialMenu").igRadialMenu("option", "isOpen", false);
        }
    }

    function setFontSize(_size) {
        if (_size == null)
            return;
        $("#htmlEditor").igHtmlEditor("executeAction", "fontsize", _size);
    }

    function setFontFamily(_font) {
        if (_font == null)
            return;
        $("#htmlEditor").igHtmlEditor("executeAction", "fontname", _font);
    }

    function rgbaToRgb(rgbaColor) {
        // remove the "a" from "rgba"
        var result = rgbaColor.replace("rgba(", "rgb(");

        // remove the alpha channel
        result = result.replace(",1)", ")");
        return result;
    }

    function setForeColor(color) {
        $("#htmlEditor").igHtmlEditor("executeAction", "forecolor", color);
    }

    function setBackColor(color) {
        $("#htmlEditor").igHtmlEditor("executeAction", "backcolor", color);
    }

    // create the html editor
    $("#htmlEditor").igHtmlEditor({
        width: 900,
        height: 450
    });

    $("#htmlEditor").igHtmlEditor("setContent", "$$(ContentText)", "html");

    // create the radial menu
    $('#radialMenu').igRadialMenu({
        width: "300px",
        height: "300px",
        items: [
            {
                name: "button1",
                header: "$$(btnBold)",
                iconUri: "http://www.igniteui.com/images/samples/radial-menu/Bold.png",
                click: function () {
                    toggleBold();
                }
            },
            {
                name: "button2",
                header: "$$(btnItalic)",
                iconUri: "http://www.igniteui.com/images/samples/radial-menu/Italic.png",
                click: function () {
                    toggleItalic();
                }
            },
            {
                type: "numericitem",
                header: "$$(btnFontSize)",
                iconUri: "http://www.igniteui.com/images/samples/radial-menu/Size.png",
                value: 8,
                items: [
                    {
                        name: "gauge1",
                        type: "numericgauge",
                        ticks: "10,12,18,24,36",
                        value: 12,
                        smallIncrement: 2,
                        valueChanged: function (evt, ui) {
                            if (evt.newValue == 10)
                                setFontSize(2);
                            else if (evt.newValue == 12)
                                setFontSize(3);
                            else if (evt.newValue == 18)
                                setFontSize(5);
                            else if (evt.newValue == 24)
                                setFontSize(6);
                            else if (evt.newValue == 36)
                                setFontSize(7);
                        }
                    }
                ]
            },
            {
                type: "list",
                header: "$$(btnFont)",
                iconUri: "http://www.igniteui.com/images/samples/radial-menu/Font.png",
                items: [
                    {
                        header: "Arial",
                        name: "Arial",
                        click: function (evt, ui) {
                            setFontFamily(evt.item.name);
                        }
                    },
                    {
                        header: "Calibri",
                        name: "Calibri",
                        click: function (evt, ui) {
                            setFontFamily(evt.item.name);
                        }
                    },
                    {
                        header: "Comic Sans",
                        name: "Comic Sans MS",
                        click: function (evt, ui) {
                            setFontFamily(evt.item.name);
                        }
                    },
                    {
                        header: "Consolas",
                        name: "Consolas",
                        click: function (evt, ui) {
                            setFontFamily(evt.item.name);
                        }
                    },
                    {
                        header: "Courier New",
                        name: "Courier New",
                        click: function (evt, ui) {
                            setFontFamily(evt.item.name);
                        }
                    },
                    {
                        header: "Segoe",
                        name: "Segoe UI",
                        click: function (evt, ui) {
                            setFontFamily(evt.item.name);
                        }
                    },
                    {
                        header: "Tahoma",
                        name: "Tahoma",
                        click: function (evt, ui) {
                            setFontFamily(evt.item.name);
                        }
                    },
                    {
                        header: "Times",
                        name: "Times New Roman",
                        click: function (evt, ui) {
                            setFontFamily(evt.item.name);
                        }
                    },
                    {
                        header: "Verdana",
                        name: "Verdana",
                        click: function (evt, ui) {
                            setFontFamily(evt.item.name);
                        }
                    }
                ]
            },
            {
                // defining color item 1
                type: "coloritem",
                header: "$$(btnForeground)",
                iconUri: "../../images/samples/radial-menu/FColor.png",
                color: "rgba(0,0,0,1)",
                colorChanged: function (evt) {
                    var colValue = evt.newValue;
                    colValue = rgbaToRgb(colValue);
                    setForeColor(colValue);
                },
                // defining color wells as sub-items for color item 1
                items: [
                    {
                        type: "colorwell",
                        color: "#FFFF00"
                    },
                    {
                        type: "colorwell",
                        color: "#C00000"
                    },
                    {
                        type: "colorwell",
                        color: "#008000"
                    },
                    {
                        type: "colorwell",
                        color: "#002060"
                    },
                    {
                        type: "colorwell",
                        color: "#000000"
                    },
                    {
                        type: "colorwell",
                        color: "#FFFFFF"
                    }
                ]
            },
            {
                // defining color item 2
                type: "coloritem",
                header: "$$(btnBackground)",
                iconUri: "../../images/samples/radial-menu/BColor.png",
                color: "rgba(255,255,255,1)",
                colorChanged: function (evt) {
                    var colValue = evt.newValue;
                    colValue = rgbaToRgb(colValue);
                    setBackColor(colValue);
                },
                // defining color wells as sub-items for color item 2
                items: [
                    {
                        type: "colorwell",
                        color: "#FFFF00"
                    },
                    {
                        type: "colorwell",
                        color: "#C00000"
                    },
                    {
                        type: "colorwell",
                        color: "#008000"
                    },
                    {
                        type: "colorwell",
                        color: "#002060"
                    },
                    {
                        type: "colorwell",
                        color: "#000000"
                    },
                    {
                        type: "colorwell",
                        color: "#FFFFFF"
                    }
                ]
            }
        ]
    });
});
//# sourceMappingURL=typescript.js.map
