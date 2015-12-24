var _firefox, _focusElem, isMobileOld, scriptsHash = {}, initLoad = false, hasLoaded = false, fadeInterval = 1000, _mobile = null,
    lastSelected, initSelected, intervalID, isManual = false, prevControlIconName = null,
    featureTimer, currStyleScripts = [], prevStyleScripts = [], index, isIE, isIE9, isIE8, isIE7, prevTitle = "", prevControlTitle = "",
    windowLoaded = false, hasSampleLoaded = true, windowScrollLeft = 0, windowScrollTop = 0,
    lastUrl, codeViewerPopupVisible, historyChangeFunc, History, a, ie9Bug, startUrl, closeHamMenu = null, hamMinWidth,
    // list of samples with full postback
    fullPostbacks = [],
    // check if it is IE9 or lower and reduce max number of history-changes
    limit = isIE9 ? 30 : 1000;


// Reloads the style sheets on the current page
function ReloadStyleSheets() {
    try {
        var linkTags = document.getElementsByTagName("link");
        var len = linkTags.length;
        for (var i = 0; i < len; i++) {
            var link = linkTags[i];
            if (link.rel === "stylesheet") {
                var linkHref = link.href;
                link.href = linkHref && linkHref.match(/[?]$/) ? linkHref.slice(0, -1) : linkHref + "?";
            }
        }
    }
    catch (ex) { }
}

function SetSBContainerWidth(containerMinWidth, containerMaxWidth) {
    var body = $('body');
    var sbContainer = $("#sampleBrowserContainer");
    var mainContainer = $("#mainContainer");
    var hamburgerMenu = $('.hamburgerMenu');
    var bodyWidth = body ? body.width() : 0;

    if (sbContainer && mainContainer) {
        if (hamburgerMenu && hamburgerMenu.css('display') != 'none') {
            sbContainer.css('width', containerMaxWidth);
            mainContainer.css('float', 'left');
        }
        else {
            mainContainer.css('float', 'none');
            if (bodyWidth >= containerMaxWidth)
                sbContainer.css('width', containerMinWidth);
            else if (bodyWidth < parseFloat(containerMinWidth))
                sbContainer.css('width', 'auto');
            else
                sbContainer.css('width', containerMinWidth);
        }
    }
}

// Syncs the height of the Hamburger menu and contentLayer to the height of the mainContainer
/* VS 12/04/2013 removed */
/*
function SyncWithMainContainer() {
    var mainContainer = $('#mainContainer');
    var contentLayer = $('#contentLayer');
    var hamburgerMenu = $('.hamburgerMenu');

    if (mainContainer) {
        var hamburgerMenuHeight = hamburgerMenu ? hamburgerMenu.height() : null;
        var contentLayerHeight = contentLayer ? contentLayer.height() : null;
        var mainContainerHeight = mainContainer.height();
        if (hamburgerMenuHeight != mainContainerHeight) {
            hamburgerMenu ? hamburgerMenu.height(mainContainerHeight) : "";
            clearInterval(intervalID);
        }
        if (contentLayerHeight != mainContainerHeight) {
            contentLayer ? contentLayer.height(mainContainerHeight) : "";
            clearInterval(intervalID);
        }
    }
}
*/

/* BEGIN Application Samples page */
function CreateAppQRCode(qrZoneID, qrImageID, href) {    
    var qrOptions = {
        text: href,
        qrZoneID: qrZoneID,
        qrImageID: qrImageID,
        size: '70',
        margin: '0',
        typeNumber: false,
        render: 'image',
        backgroundColor: '#FFFFFF'
    }

    CreateQRCode(qrOptions);
}

function CreateQRCode(qrOptions) {    
    if (!qrOptions) return;
    
    var href = qrOptions.text ? qrOptions.text : "";
    if (href.indexOf("#") >= 0)
        href = href.split('#')[0];
    else
        href = href.split('?')[0];
    qrOptions.text = href;

    var qrZoneID = qrOptions.qrZoneID ? qrOptions.qrZoneID : 'qrZone';
    var qrImageID = qrOptions.qrImageID ? qrOptions.qrImageID : 'qrZoneImage';

    var qrZone = $("#" + qrZoneID);
    if (qrZone && (!qrOptions.hasOwnProperty('isInitLoad') || (!qrOptions.isInitLoad || qrOptions.isInitLoad === true))) {
        var qrType = 'image';

        //// For IE7
        //var a = navigator.userAgent.toLowerCase();
        //index = a.indexOf("msie ");
        //if (index > 0) {
        //    index = parseFloat(a.substr(index + 5));
        //    if (index <= 7)
        //        qrType = 'table';
        //}
        
        qrZone.html('').qrcode(qrType, qrOptions);
        $(qrZone.find(qrType.replace('image', 'img')).get(0)).attr('id', qrImageID).attr('alt', 'QR Code');
    }
}

/* END Application Samples page */

/* BEGIN Code Viewer Popup */

// show - show/hide codeViewerPopup
// checkValid - fired by permanent timer/interval:
// check if codeViewerPopup should be automatically hidden due to large size of browser
function toggleCodeViewerPopup(show, checkValid) {
	var divs, i, id, copy, obj, input,
		codeDiv, codeDiv$, codeDivHeight, reduceHeight,
		accordion, height, top, left,
		ticks, scrollTimer, div = codeViewerPopupVisible, scroller = document.body;
	if (checkValid) {
		if (!div) {
			return;
		}
		if (div.parentNode && div.offsetWidth) {
			if (div._height === document.documentElement.clientHeight) {
				return;
			}
			show = true;
			scroller = null;
		}
	}
	obj = $("#codeViewerPopup");
	div = obj[0];
	if (!div) {
		return;
	}
	if (show && div._visible && !checkValid) {
		return;
	}
	div._visible = show;
	codeViewerPopupVisible = show ? div : null;
	if (!show) {
		// enable default scrolling
		document.documentElement.style.overflow = document.body.style.overflow = "auto";
	}
	if (!show && checkValid) {
		obj.css("visibility", "hidden");
		return;
	}
	// get around mobile scroll bugs: move codeViewer to body and hide all child elements of body besides codeViewer
	if (!checkValid && isMobilePhone()) {
		$("#sampleBrowserContainer").css("display", show ? "none" : "block");
		$(".footerArea").css("display", show ? "none" : "block");
		if (!div._oldParent) {
			div._oldParent = div.parentNode;
		}
		i = show ? document.body : div._oldParent;
		if (div.parentNode !== i) {
			obj.appendTo(i);
		}
	}
	obj.css("visibility", "visible");
	if (show) {
		if (isMobilePhone()) {
			// to ensure that browser will scroll to top (mobile phones)
			// create invisible INPUT located at the top-left corner and set focus to it
			input = obj.find("input");
			if (!input[0]) {
				input = $("<input id='codeViewerPopupInput' />").css({
					position: "absolute",
					top: "-2px",
					left: "-2px",
					fontSize: "1px",
					height: "1px",
					width: "1px",
					zIndex: -1,
					opacity: 0,
					background: "transparent",
					outline: "none",
					border: "none"
				}).appendTo(div);
			}
			setTimeout(function () {
				try {
					input[0].focus();
                } catch (ignore) { }
			}, 100);
		}
		div._height = height = document.documentElement.clientHeight;
		// find element which controls scroll
		while (scroller) {
			top = scroller.scrollTop;
			left = scroller.scrollLeft;
			if (top || left) {
				break;
			}
			scroller = scroller.parentNode;
		}
		// disable default scrolling
		if (!checkValid) {
			document.documentElement.style.overflow = document.body.style.overflow = "hidden";
			obj.css("opacity", 0).css("height", "auto");
		}
		// ensure that contents of accordion panes are filled: copies from jquery tabs-code-viewer panes
		accordion = $("#codeViewerPopupAccordion");
		divs = accordion.find("DIV");
		i = div._filled ? 0 : divs.length;
		div._filled = true;
		// only once
		while (i-- > 0) {
			codeDiv = divs[i];
			id = codeDiv.id;
			copy = id ? id.indexOf("_copy") : 0;
			if (copy > 0) {
				codeDiv._codeDiv = true;
				codeDiv$ = $(codeDiv);
				codeDiv._oldDisplay = codeDiv$.css("display");
				// temporary hide all accordion views: to calculate height of accordion headers
				codeDiv$.css("display", "none");
				// find html element which contains contents for codeViewer
				copy = $("#" + id.substring(0, copy))[0];
				if (copy) {
					// fill contents for codeViewer
					codeDiv$.html(copy.innerHTML);
				}
			}
		}
		// only once
		if (codeDiv$) {
			// calculate how much height of codeviewer should be reduced
			reduceHeight = accordion[0].offsetHeight;
			// restore original visibility of accordion views
			for (i = 0; i < divs.length; i++) {
				if (divs[i]._codeDiv) {
					divs[i].style.display = divs[i]._oldDisplay;
				}
			}
			// adjust for borders and padding
			reduceHeight += isNaN(i = parseFloat(codeDiv$.css("borderTopWidth"))) ? 0 : i;
			reduceHeight += isNaN(i = parseFloat(codeDiv$.css("borderBottomWidth"))) ? 0 : i;
			reduceHeight += isNaN(i = parseFloat(codeDiv$.css("paddingTop"))) ? 0 : i;
			reduceHeight += isNaN(i = parseFloat(codeDiv$.css("paddingBottom"))) ? 0 : i;
			div._reduceHeight = reduceHeight;
			// stretch accordion
			accordion.css("height", "100%");
		}
		reduceHeight = div._reduceHeight;
		if (reduceHeight) {
			// 15: adjust for larger height of pop-up (10px) and make height of code-viewer slightly less (5px) than calculated height
			codeDivHeight = (height - reduceHeight - 15) / height * 100 + "%";
			for (i = 0; i < divs.length; i++) {
				if (divs[i]._codeDiv) {
					divs[i].style.height = codeDivHeight;
				}
			}
		}
		// attempt to "stretch" height of pop-up to height of browser, because parent of #codeViewerPopup is not body
		obj.css("height", "100%");
		// 15: make height of pop-up slightly larger than calculated height
		obj.css("height", (height + (isMobilePhone() ? 25 : 15)) / (div.offsetHeight || 100) * 100 + "%");
		// animate browser-scrolling to let/top corner with 400ms
		if (left || top) {
			if (isMobilePhone()) {
				scroller.scrollTop = scroller.scrollLeft = 0;
				if (window.scrollTo)
					window.scrollTo(0, 0);
			} else {
				ticks = 10;
				scrollTimer = setInterval(function () {
					if (ticks-- < 1 || !div.parentNode || !div.parentNode.offsetWidth) {
						clearInterval(scrollTimer);
						return;
					}
					scroller.scrollTop = top * ticks / 10;
					scroller.scrollLeft = left * ticks / 10;
				}, 40);
			}
		}
		if (checkValid) {
			return;
		}
	}
	obj.animate({ opacity: show ? 1 : 0 }, 500, null, show ? null : function () {
		obj.css("visibility", "hidden");
	});
}

/* END Code Viewer Popup */


// get LIs which contain navigation list of samples
function getNavigationLIs() {
    return $(".navCategoryFeatures").find("li.navSample");
}

// Navigate between samples via click on the hamburger menu sample or prev/next buttons
function _navigate(href, a, e) {
    if (!a || a.length <= 0 || !a[0]) return;

    // Close the hamburgerMenu when a sample link is clicked expect on larger screens
    var body = $('body');
    var sbContainer = $("#sampleBrowserContainer");
    var bodyWidth = body ? body.width() : 0;
    var containerMaxWidth = sbContainer ? sbContainer.css("max-width") : 0;
    var containerMaxWidthFloat = parseFloat(containerMaxWidth);
    if (!isManual) {
        if (bodyWidth < containerMaxWidthFloat)
            contentLayerClick();

        // Scroll to the top every time an item is chosen except when the prev/next buttons are clicked
        window ? window.scrollTo(0, 0) : "";
    }
    isManual = false;
    if (bodyWidth >= containerMaxWidthFloat) {
        var mainContainer = $("#mainContainer");
        var tempContainer = $(".tempContainer");
        var containerMinWidth = tempContainer ? tempContainer.css("min-width") : 0;
        mainContainer ? mainContainer.width(containerMinWidth) : "";
    }

    // after igGrid with enabled filtering or gridGroupBy was loaded, a sample with html binding fails: set flag for that sample
    if ((href.indexOf("all-features") >= 0 || href.indexOf("filtering") >= 0) && fullPostbacks[fullPostbacks.length - 1] !== "grid/html-binding") {
        // temporary comment: wait if igGrid will fix that bug
        //						fullPostbacks.push("grid/html-binding");
		}
    // check for IE7
    // check for IE+loading-external-page with igDialog
    // check for full postback flag set by IsFullPostBack node defined in sample-meta-data-xml
    var i = 0;
    var sampleContainer = $('#sampleContainer');
    if (sampleContainer === null || sampleContainer.length == 0
        || !history || !history.pushState
        || (document.URL.lastIndexOf("file:", 0) === 0) /* This is needed to disable dynamic loading for the local install zip */
        || (isIE && href.indexOf("/loading-external-page") > 0 && href.indexOf("dialog") >= 0)
        || (a[0].className && a[0].className.indexOf("fullPostBack") >= 0)) {
        i = 0;
    } else {
        // check for explicit sample with full postback
        i = fullPostbacks.length;
        while (i-- > 0) {
            if (href.indexOf(fullPostbacks[i]) >= 0) {
                break;
            }
        }
        // limit for IE9
        if (--limit <= 0) {
            i = 0;
        }
    }
    if (isMobileOld) {
        i = 0;
    }
    var parentLI = a.parent("li");
	 $(".sampleCtpLabel").css("display", parentLI.attr("ctp") ? "block" : "none");
    parentLI = parentLI ? parentLI[0] : null;
    // if(i >= 0), then that will be the end of History operations: trigger default action of href
    // after that will be full reload and History will start over

    // Temporarily disable dynamic loading everywhere
    i = 0;
    if (e && i < 0) {
        e.preventDefault();
    } else if (i >= 0 && location.href !== a[0].href && parentLI && parentLI._ig_events_ === true) {
        // set flag to prevent double processing of click
        parentLI._ig_events_ = "end";
        // if <A> was clicked, then trigger default action of <A>
        isManual = true;
        if (isMobilePhone()) {
            window.location = href;
        } else {
            /* OK 10/28/2013 156151 - Navigation buttons do not work in latest version of Safari */
            if (a[0].click)
                a[0].click();
            else {
                var evObj = document.createEvent('MouseEvents');
                evObj.initMouseEvent('click', true, true, window);
                a[0].dispatchEvent(evObj);
            }
        }
    }

    // continue History operations
    if (i < 0 && History) {
        initLoad = false;
        
        var aSampleChild = a.children(".igsb-sampleTitle");
        var sampleText = aSampleChild ? aSampleChild.text() : "";
        var aText = sampleText ? sampleText.trim() : "";
        var controlTitle = GetControlTitle(a);
        /* OK 10/16/2013 154893 - Map samples do not render title properly*/
        var lowerAText = aText.toLowerCase();
        if (lowerAText.indexOf("overview") > -1 || aText.indexOf("概要") > -1)
            aText = aText.replace(controlTitle, "").trim();

        //Change document title
        var docTitle = document.title != "" && prevTitle && prevTitle != "" ? document.title.replace(new RegExp(prevTitle, "g"), aText).replace(new RegExp(prevControlTitle, "g"), controlTitle) : aText;

        // Change keywords meta tag contents
        var keywordMeta = $('[name="keywords"]'), keywordContent = "";
        if (keywordMeta && prevTitle && prevTitle != "" && prevControlTitle && prevControlTitle != "") {
            keywordContent = keywordMeta.attr("content");
            keywordContent = keywordContent.replace(new RegExp(prevTitle, "g"), aText).replace(new RegExp(prevControlTitle, "g"), controlTitle);
        }
        var histData = { currSelected: getNavigationLIs().index(a.parents(".navSampleTag")), sampleTitle: aText, controlTitle: controlTitle, keywordContent: keywordContent };
        History.pushState(histData, docTitle, href);
        prevTitle = aText;
        prevControlTitle = controlTitle;
    }
}


        
/* VS 12/04/2013 */
// fix layout of hamburger menu to stretch its height to browser, inner scroll, etc.
var count = 0;
function fixMenuVertLayout(fixScroll) {
	var menu = $(".navCategoryFeatures"),
		samplesDiv = $("#menuSamplesContainer"),
		main = $("#mainContainer"),
		hamburger = $("#controlsMenu");
	if (!main[0] || !hamburger[0] || !menu[0] || !menu[0].offsetWidth) {
		return;
	}
	if (isMobilePhone() && samplesDiv.igSbScroll && !samplesDiv.data("igSbScroll")) {
		samplesDiv.igSbScroll({
			direction: "y"
		});
	}
	menu.css("marginTop", "0px");
	hamburger[0].scrollTop = 0;
	samplesDiv[0].scrollTop = 0;
	var body = document.body,
		a = navigator.userAgent.toLowerCase(),
		isIE = a.indexOf("msie ") > 0 || a.indexOf('trident/') > 0,
		mainOffset = main.offset().top,
		menuOffset = menu.offset().top,
		samplesOffset = samplesDiv.offset().top - menuOffset,
		offsetTop = menuOffset - $("#sampleBrowserContainer").offset().top,
		height = Math.min(body.clientHeight, body.parentNode.clientHeight),
		mainHeight = main[0].offsetHeight,
		scrollTop = Math.max(body.parentNode.scrollTop, body.scrollTop);
	if (scrollTop > offsetTop) {
		if (!isIE) {
			menu.css("marginTop", (scrollTop - offsetTop) + "px");
		}
	} else if (offsetTop > 0) {
		height -= (offsetTop - scrollTop);
	} else {
		height -= offsetTop;
	}
	if (isIE) {
		if ((scrollTop - (menu.closest('li').offset().top - $("#sampleBrowserContainer").offset().top)) > 0) {
			if (menu.css('position') !== 'fixed') {
				menu
					.css('top', '0px')
					.css('width', menu.width())
					.css('position', 'fixed');
			}
		} else {
			menu
				.css('top', '')
				.css('position', '')
				.css('width', '');
		}
	}
	if (Math.abs(hamburger[0].offsetHeight - mainHeight) > 5) {
		hamburger.css("height", mainHeight + "px");
	}
	mainHeight += mainOffset - menuOffset;
	if (mainHeight > 0 && height + scrollTop - offsetTop > mainHeight) {
		height = offsetTop + mainHeight - scrollTop;
	}
	menu.css("height", Math.max(height, 2) + "px");
	// height of scrollable container
	height = Math.max(height - samplesOffset, 10);
	samplesDiv.css("height", height + "px");
	// ensure selected menu item is visible
	fixScroll = fixScroll ? $('li.listItemSelected') : null;
	if (fixScroll && fixScroll[0]) {
		// offset of selected item within its container
		fixScroll = fixScroll.offset().top - (samplesOffset + menuOffset);
		if (fixScroll > height - height / 2) {
			samplesDiv[0].scrollTop = fixScroll - Math.floor(height / 2);
		}
	}
}

// Detect if the browser is of a mobile phone (excluding tablets)
function isMobilePhone() {
    var mobileDevice = getMobile();
    return mobileDevice !== "none" && mobileDevice.indexOf("tablet") < 0;
}

// Detect if the browser is a mobile one or not (including tablets)
function isMobile() {
    var mobileDevice = getMobile();
    return mobileDevice !== "none";
}

// Get the name of the mobile device if possible
function getMobile() {
    if (!_mobile) {
        var agent = navigator && navigator.userAgent ? navigator.userAgent.toLowerCase() : "";

        if (agent.match(/iphone/i)) {
            _mobile = "IPhone";
        }
        else if (agent.match(/ipad/i)) {
            _mobile = "tablet";
        }
        else if (agent.match(/android/i)) {
            _mobile = "androidtablet";
            if (agent.match(/mobile/i))
                _mobile = "android";
            if (agent.indexOf("android 2.") > 0 || agent.indexOf("android 3.") > 0)
                isMobileOld = true;
        }
        else if (agent.match(/windows phone/i)) {
            _mobile = "windowsphone";
        }
        else if (agent.match(/mobile/i)) {
            _mobile = "unknown";
        }
        else if (agent.match(/tablet pc/i) || agent.match(/tabletpc/i)) {
            _mobile = "none";
        }
        else if (agent.match(/tablet/i)) {
            _mobile = "tablet";
        }
        else {
            _mobile = "none";
        }
    }

    return _mobile;
}

// Set features for mobile devices (tablets and phones)
function SetMobileFeatures() {
    var isMobileDevice = isMobile();
    if (isMobileDevice) {
        var jsFiddle = $("#JSFiddle");
        var downloadButton = $(".downloadButton");
        var hamDownloadButton = $('.hamburgerMenu .navCategoryTitle a[href*="download"]');
        jsFiddle ? jsFiddle.css("display", "none") : "";
        downloadButton ? downloadButton.css("display", "none") : "";
        hamDownloadButton ? hamDownloadButton.css("display", "none") : "";
    }
}

function ToggleExpandClass(item) {
    var expandClass = "igsb-expanded";
    var collapseClass = "igsb-collapsed";
    if (item.hasClass(expandClass)) {
        item.removeClass(expandClass);
        item.addClass(collapseClass);
    }
    else if (item.hasClass(collapseClass)) {
        item.removeClass(collapseClass);
        item.addClass(expandClass);
    }
}

// Fix for IE: Re-assign the line-height for the items in the hamburger menu
function AdjustLineHeight(item) {
    if (item) {
        var tempContainer = $(".tempContainer");
        var lineHeight = tempContainer ? tempContainer.css('line-height') : "30px";
        item.css('line-height', "normal")
        item.css('line-height', lineHeight);
    }
}

// Open/Close the child menu item of a given menu item
// fix: request to trigger calculation of menu-layout
function OpenCloseMenuItem(menuItem, childMenuItemID, mainContainerID, fix) {
    var source = menuItem;
    if (source) {
        var next = source.nextAll(childMenuItemID);
        // displayBlock: adjust for logic used by "search"
        var justCloseIt = next.css("display") === "block" || next.hasClass("displayBlock");
        next.removeClass("displayBlock");
        // open if closed
        if (!justCloseIt) {
            next.slideDown();
            var childItem = $(childMenuItemID);
            if (mainContainerID === ".hamburgerMenu") {
                AdjustLineHeight(childItem);
                if (fix) {
                    // fix layout after animation of slideDown finished
                    setTimeout(function () {
                        fixMenuVertLayout(true);
                    }, 600);
                }
            }
        }
        else
            // close if open
            next.slideUp();

        ToggleExpandClass(source);
    }
}


// Sets the width of the sample container to the actual width instead of auto
function SetSampleContainerWidth() {
    var sampleMain = $("#sample");
    var sampleContainer = $("#sampleContainer");
    var tempContainer = $(".tempContainer");
    var body = $('body');
    var containerMinWidth = tempContainer ? tempContainer.css("min-width") : 0;
    var containerMinWidthFloat = parseFloat(containerMinWidth);
    var bodyWidth = body.width();

    if (sampleMain && sampleContainer) {
        var sampleMarginLeft = sampleMain.css("margin-left");
        var sampleMarginRight = sampleMain.css("margin-right");
        var containerNewWidth = bodyWidth >= containerMinWidthFloat ? containerMinWidthFloat : bodyWidth;
        sampleContainer.width(containerNewWidth - parseFloat(sampleMarginLeft) - parseFloat(sampleMarginRight));
    }
}

$(function () {    
    $("#menuSamplesContainer").on('mousewheel', function (e) {
      return  MouseWheelHandler(e);
    });
    function MouseWheelHandler(e)
    {
        var container = $("#menuSamplesContainer");
        var e = window.event || e; // old IE support       
        var delta = Math.max(-1, Math.min(1, (e.wheelDelta || -e.detail)));        
        var containerScrollTop = container[0].scrollTop;
        var iheight = container.innerHeight();
        var sheight = container[0].scrollHeight;
        if (containerScrollTop + Math.abs(e.wheelDelta) >= sheight - iheight && delta < 0)
        {
            //at bottom and continuing to scroll down. 
            //Prevent event and set the scrolltop position to the bottom.
            container[0].scrollTop = sheight - iheight;
            e.preventDefault();
            return false;
        }
        else if (containerScrollTop <= Math.abs(e.wheelDelta) && delta > 0)
        {
            //at top and scrolling up
            //Prevent event and set the scrolltop position to the top.
            container[0].scrollTop = 0;
            e.preventDefault();
            return false;
        }
    }
    $('.headerIcon_click').click(function () {
        var i, index = "index.html", href = window.location.href;
        if (href.indexOf("file:") >= 0) {
            i = href.lastIndexOf("/");
            if (i >= 0) {
                if (href.indexOf(index) > 0) {
                    return;
                }
                var origHref = href;
                href = href.substring(0, i);
                if (!(origHref.indexOf("application-samples.html") > 0 || origHref.indexOf("getting-started.html") > 0 || origHref.indexOf("getting-started-mobile.html") > 0)) {
                    i = href.lastIndexOf("/");
                    if (i >= 0) {
                        href = href.substring(0, i);
                    }
                }
                window.location = href + "/" + index;
                return;
            }
        }
        window.location = MyAppUrlSettings ? MyAppUrlSettings.hostname : window.location.origin;
    });

    $('#gettingStartedBtn').click(function () {
        window.location = MyAppUrlSettings ? MyAppUrlSettings.hostname + "getting-started" : window.location;
    });
    
    /* Start Hamburger Menu */
	// check if top-level-menu sample is selected and hide menu items related to controls
    function hideFeatures() {
		if ($('li.listItemSelected').hasClass("navSampleApp")) {
			// container of menu items which have control-features
			var features = $(".navCategoryFeatures");
			if (features.css("display") !== "none") {
				// find control-feature-title, which is used by menu for click actions to toggle its state
				// and call invoke codes used on click
				var title = features.siblings(".navCategoryTitle");
				if (title[0]) {
					OpenCloseMenuItem(title, ".navCategoryFeatures", ".hamburgerMenu");
				}
			}
		}
	 }
    // Expands the group of the currently selected sample in the hamburger menu
    function ExpandSampleGroup() {
        var currSelElems = $('li.listItemSelected');
        if (!currSelElems || currSelElems.length <= 0) {
            // Fix for samples that throw exceptions:
            // Below logic will select the sample and expand the respective group 
            // in the hamburger menu despite the exception
            var navSamples = $('.navSampleTag');
            var navSamplesCount = navSamples ? navSamples.length : 0;
            for (var sampleIndex = 0; sampleIndex < navSamplesCount; sampleIndex++) {
                var navSampleTag = navSamples[sampleIndex] ? $(navSamples[sampleIndex]) : null;
                var navSampleA = navSampleTag ? navSampleTag.find("a") : null;
                var navAhref = navSampleA && navSampleA.length > 0 && navSampleA[0] ? navSampleA[0].href : "";
                if (navAhref === window.location.href) {
                    navSampleTag.addClass("listItemSelected");
                    currSelElems = navSampleTag;
                    break;
                }
            }
        }

        if (currSelElems && currSelElems.length > 0) {
            hideFeatures();
            var groupsList = currSelElems.parents('.navControl:first').children('.navSampleGroupsList');
            if (groupsList && groupsList.length === 1)
                groupsList.css("display", "block");
            // uncomment when layout of menu will be fixed: menu height is not larger than height of browser
				//ensureSelectedItemVisible();
        }
    }

    window.onload = setInitialSettings = function (docReady) {
        if (isIE && (!docReady || docReady != true)) return;

        // Reload the codeViewer css in the end to override styles of theme.css
        var sampleCSS = $("head link[rel=stylesheet][href*='sb-sample.css']");
        if (sampleCSS) {
            var head = $("head");
            sampleCSS.remove();
            sampleCSS.appendTo(head);            
        }

        var body = $('body');
        var sbContainer = $("#sampleBrowserContainer");
        var mainContainer = $('#mainContainer');
        var hamburgerMenu = $('.hamburgerMenu');
        var tempContainer = $(".tempContainer");
        var contentLayer = $("#contentLayer");
        var sbHeader = $('.sbHeader');
        var sbFooter = $('.footerArea');

        var bodyWidth = body ? body.width() : 0;
        var containerMinWidth = tempContainer ? tempContainer.css("min-width") : 0;
        var containerMaxWidth = sbContainer ? sbContainer.css("max-width") : 0;
        var containerMaxWidthFloat = parseFloat(containerMaxWidth);               
        
        sbHeader ? sbHeader.width("auto") : "";
        sbFooter ? sbFooter.width("auto") : "";        
/* VS 12/04/2013 removed */
/*
        if (bodyWidth >= containerMaxWidthFloat && mainContainer && hamburgerMenu) {
            hamburgerMenu.css('display', 'block').css('position', 'relative').css('top', 0).css('left', 0);
            intervalID = setInterval(SyncWithMainContainer, 100);
        }
*/
        // Fix bug for safari where contents of main container are not positioned correctly
        hamburgerMenu ? hamburgerMenu.css('position', 'absolute') : "";
        SetSBContainerWidth(containerMinWidth, containerMaxWidth);
        hamburgerMenu ? hamburgerMenu.css('position', 'relative') : "";

        ExpandSampleGroup();
/* VS 12/04/2013 removed */
/*
        intervalID = setInterval(SyncWithMainContainer, 100);
*/
        searchInit(true);
        fixMenuVertLayout(true);
    };

    var onceResized, windowResizeFn = function () {
        onceResized = true;
        try {
            SetMobileFeatures();   
            
            var body = $('body');
            var sbContainer = $("#sampleBrowserContainer");
            var mainContainer = $("#mainContainer");
            var tempContainer = $(".tempContainer");
            var hamburgerMenu = $('.hamburgerMenu');
            var sbHeader = $('.sbHeader');
            var sbFooter = $('.footerArea');
            var sampleContainer = $("#sampleContainer");

            var bodyWidth = body ? body.width() : 0;
            var containerMinWidth = tempContainer ? tempContainer.css("min-width") : 0;
            var containerMaxWidth = sbContainer ? sbContainer.css("max-width") : 0;
            var containerMaxWidthFloat = parseFloat(containerMaxWidth);
            var containerMinWidthFloat = parseFloat(containerMinWidth);

            if (hamburgerMenu && closeHamMenu == null) {
                if (bodyWidth >= containerMaxWidthFloat)
                    hamburgerMenu.css('display', 'block').css('position', 'relative').css('top', 0).css('left', 0);
                else
                    hamburgerMenu.css('display', 'none');
            }
            
            // Fix bug for safari where contents of main container are not positioned correctly
            hamburgerMenu ? hamburgerMenu.css('position', 'absolute') : "";
            SetSBContainerWidth(containerMinWidth, containerMaxWidth);
            hamburgerMenu ? hamburgerMenu.css('position', 'relative') : "";

            if (isIE9) {
                var sbHeaderWidth = bodyWidth >= containerMaxWidthFloat ? containerMaxWidthFloat : bodyWidth;
                sbHeader ? sbHeader.width(sbHeaderWidth) : "";
                sbFooter ? sbFooter.width(bodyWidth) : "";
            }

            sampleContainer ? sampleContainer.width("auto") : "";

            if (hamburgerMenu && hamburgerMenu.css('display') != 'none') {

                body ? body.css('overflow-x', 'hidden') : "";
                SetSampleContainerWidth();

                // Re-adjust the width of hamburger menu to fit for smaller screens too
                var navWidth = Math.min(containerMaxWidthFloat - parseFloat(containerMinWidth), bodyWidth * .85);
                var hamburgerMenuWidth = hamburgerMenu ? hamburgerMenu.width() : 0;
                if (hamburgerMenuWidth != navWidth) 
                    hamburgerMenu.width(navWidth);
                
                var contentLayer = $('#contentLayer');
                if (!contentLayer) return;

                if (bodyWidth >= containerMaxWidthFloat) {
                    contentLayer.css('display', 'none');
                    var mainContainerHeight = mainContainer ? mainContainer.height() : 0;
                    hamburgerMenu.height(mainContainerHeight);
                    contentLayer.height(mainContainerHeight);

                    sbHeader ? sbHeader.width("auto") : "";
                    sbFooter ? sbFooter.width("auto") : "";
                }
                else {
                    var sbHeaderWidth = bodyWidth >= containerMaxWidthFloat ? containerMaxWidthFloat : bodyWidth;
                    sbHeader ? sbHeader.width(sbHeaderWidth) : "";
                    sbFooter ? sbFooter.width(bodyWidth) : "";

                    var mainContainerWidth = tempContainer ? tempContainer.css('width') : containerMinWidth;
                    var overlayWidth = bodyWidth < containerMaxWidthFloat ? bodyWidth - navWidth : mainContainerWidth;
                    var mainContainerOffset = mainContainer.offset();
                    var contentLayerLeft = mainContainerOffset ? mainContainerOffset.left : 0;
                    var contentLayerTop = mainContainerOffset ? mainContainerOffset.top : 0;
                    contentLayer.css('display', 'block').width(overlayWidth).css("left", contentLayerLeft).css("top", contentLayerTop);
                }
            }
        }
        catch (ex) { }
        fixMenuVertLayout(true);
        searchInit(true);
    };
    $(window).resize(windowResizeFn).scroll(function () {
        fixMenuVertLayout(true);
    });

    // Fix for IE : Expand the corresponding hamurger menu group 
    // of currently selected sample on full page load
    var readyStateCheckInterval = setInterval(function () {
        if (document.readyState === "complete") {
            ExpandSampleGroup();
            SetMobileFeatures();
            clearInterval(readyStateCheckInterval);
            if (!onceResized)
                windowResizeFn();
        }
    }, 1000);

	var searchArrays = [];
	// fill array of objects used by search
	// structure:
	// [array_of_features] {elem,titleElem,controls}
	//   [array_of_controls] {li,titleElem,txt,groups}
	//     [array_of_groups] {elem,titleElem,samples}
	//       [array_of_samples] {li,newFlag,txt}
	function searchInitArray() {
		var i, len, feature, elem, li, control, lenControl, iControl, txt,
			iSample, lenSample, controls, iGroup, lenGroup, group, groups, samples, outOfGroup,
			div = $(".navCategoryFeatures");
		if (!div || div.length !== 1) {
			return;
		}
		if (searchArrays.length) {
			div.find(".displayBlock").removeClass("displayBlock");
			return;
		}
		div = div.find(".navCategoryFeature");
		len = div.length;
		for (i = 0; i < len; i++) {
			elem = $(div[i]);
			feature = searchArrays[i] = {
				elem: elem,
				titleElem: elem.find(".navControlHeader")
			};
			controls = elem.find(".navControl");
			lenControl = controls.length;
			feature.controls = [];
			for (iControl = 0; iControl < lenControl; iControl++) {
				li = $(controls[iControl]);
				elem = li.find(".navControlTitle");
				control = {
					li: li,
					titleElem: elem,
					txt: trimTxt(elem.html())
				};
				control.groups = [];
				groups = li.find(".navSampleGroup");
				lenGroup = groups.length;
				outOfGroup = null;
				if (lenGroup === 0) {
					groups = control.li;
					lenGroup = groups.length;
				} else {
					// find samples outside of group
					samples = groups[0].parentNode.childNodes;
					iSample = samples.length;
					while (iSample-- > 0) {
						elem = $(samples[iSample]);
						if (elem.hasClass("navSample")) {
							outOfGroup = outOfGroup || [];
							outOfGroup[outOfGroup.length] = elem;
						}
					}
				}
				for (iGroup = 0; iGroup < lenGroup; iGroup++) {
					elem = $(groups[iGroup]);
					control.groups[iGroup] = group = {
						elem: elem,
						titleElem: elem.find(".navSampleGroupTitle")
					};
					elem = elem.find(".navSample");
					group.samples = [];
					lenSample = elem.length;
					for (iSample = 0; iSample < lenSample; iSample++) {
						searchFillSample($(elem[iSample]), group.samples, iSample);
					}
					// samples located outside of group add to 1st group
					for (iSample = 0; outOfGroup && iSample < outOfGroup.length; iSample++) {
						searchFillSample($(outOfGroup[iSample]), group.samples, lenSample++);
					}
					outOfGroup = null;
				}
				feature.controls[iControl] = control;
			}
		}
	}
	// find text and newFlag for a sample and fill its members
    function searchFillSample(li, samples, i) {
		var all, ii = -1, txt = trimTxt(li.find(".igsb-sampleTitle").html());
		if (!txt) {
			all = li.find("*");
			while (!txt && ++ii < all.length) {
				txt = trimTxt($(all[ii]).html());
			}
		}
		samples[i] = {
			li: li,
			newFlag: li.find(".igsb-status-new").length > 0 || li.find(".igsb-status-upd").length > 0,
			txt: txt
		};
	}
	// return true if search of txt[] within feature, control, sample was successful
    function searchMatch(control, sample, txt) {
		var i, len = txt ? txt.length : 0;
		for (i = 0; i < len; i++) {
			if (control.indexOf(txt[i]) < 0 && sample.indexOf(txt[i]) < 0) {
				return false;
			}
		}
		return true;
	}
	// remove leading and trailing spaces, new lines and tabs
    function trimTxt(txt) {
		var len, ch, next = txt;
		while (next) {
			next = false;
			len = txt.length;
			ch = len ? txt.charAt(0) : 0;
			if (ch === " " || ch === "\n" || ch === "\r" || ch === "\t") {
				txt = txt.substring(1);
				len--;
				next = true;
			}
			ch = (len > 1) ? txt.charAt(len - 1) : 0;
			if (ch === " " || ch === "\n" || ch === "\r" || ch === "\t") {
				txt = txt.substring(0, len - 1);
				next = true;
			}
		}
		return txt ? txt.toLowerCase() : "";
	}
	// return array of texts/keys to search
    function searchGetTxt(txt) {
		var i2, chars = 2, i = 0, vals = [], quots = ["'", '"'];
		// find exact texts (between quots)
		while (chars-- > 0) {
			while ((i = txt.indexOf(quots[chars], i)) >= 0) {
				i2 = txt.indexOf(quots[chars], i + 1);
				if (i2 > i) {
					if (i2 + 1 > i) {
						vals[vals.length] = txt.substring(i + 1, i2);
					}
					txt = txt.substring(0, i) + "+" + txt.substring(i2 + 1);
				}
				i++;
			}
		}
		txt = txt.replace(quots[0], "+").replace(quots[1], "+").replace(/ /g, "+").replace(/-/g, "+").split("+");
		i2 = txt.length;
		for (i = 0; i < i2; i++) {
			if (txt[i]) {
				vals[vals.length] = txt[i];
			}
		}
		return vals;
	}
	// action on search: find matches, hide/show menu items, etc.
	// allOrNew==true/false comes from corresponding toggle-buttons
	// allOrNew==undefined comes request to search (change in field or whatever)
	function searchSamples(allOrNew) {
		var elem, css, i, len, feature, hasFeature,
			iControl, lenControl, groups, iGroup, lenGroup, group, newNoText,
			hasGroup, iSample, lenSample, hasSample, control, titles, sample, samples, controls,
			field = $("#searchField"),
			input = field[0],
			txt = trimTxt(field.val());
		$(".searchHighlightItem").removeClass("searchHighlightItem");
		$(".listItemSelected").removeClass("listItemSelected");
		if (!txt) {
			$(".searchClearIcon").removeClass("searchClearIconValue");
			$(".searchHint").removeClass("displayNone");
		} else {
			$(".searchClearIcon").addClass("searchClearIconValue");
			$(".searchHint").addClass("displayNone");
		}
		if (allOrNew === undefined || allOrNew === null) {
			allOrNew = input._all;
		}
		searchFieldBlur(field);
		if (input._all !== allOrNew) {
			input._all = allOrNew;
		} else if (txt === input._lastTxt) {
			return;
		}
		input._lastTxt = txt;
		if (txt) {
			txt = searchGetTxt(txt);
		}
		searchInitArray();
		len = searchArrays.length;
		for (i = 0; i < len; i++) {
			hasFeature = false;
			feature = searchArrays[i];
			controls = feature.controls;
			lenControl = controls ? controls.length : 0;
			for (iControl = 0; iControl < lenControl; iControl++) {
				hasGroup = false;
				control = controls[iControl];
				groups = control.groups;
				lenGroup = groups.length;
				for (iGroup = 0; iGroup < lenGroup; iGroup++) {
					hasSample = false;
					group = groups[iGroup];
					samples = group.samples;
					lenSample = samples.length;
					for (iSample = 0; iSample < lenSample; iSample++) {
						sample = samples[iSample];
						if (!allOrNew && !sample.newFlag) {
							sample.li.addClass("displayNone");
						} else {
							newNoText = !allOrNew && !txt && sample.newFlag;
							if (newNoText || searchMatch(control.txt, sample.txt, txt)) {
								sample.li.removeClass("displayNone");
								hasSample = true;
								hasGroup = true;
								hasFeature = true;
								elem = txt || newNoText ? sample.li[0] : null;
								while (elem && !elem.offsetHeight) {
									css = elem.className;
									if (css.indexOf("navSamplesList") >= 0 || css.indexOf("navSampleGroupsList") >= 0) {
									    var childItem = $(elem);
									    if (childItem) {
									        childItem.addClass("displayBlock");
									        AdjustLineHeight(childItem);
									    }
									} else if (elem.style.display === "none") {
									    var childItem = $(elem);
									    if (childItem) {
									        childItem.addClass("displayBlock");
									        AdjustLineHeight(childItem);
									    }
									}
									if (css.indexOf("navCategoryFeature") >= 0 || elem === feature.elem[0]) {
										break;
									}
									elem = elem.parentNode;
								}
							} else {
								sample.li.addClass("displayNone");
							}
						}
					}
					if (hasSample && !txt) {
						group.titleElem.removeClass("displayNone");
					} else {
						group.titleElem.addClass("displayNone");
					}
				}
				if (hasGroup) {
					control.titleElem.removeClass("displayNone");
				} else {
					control.titleElem.addClass("displayNone");
				}
			}
			if (hasFeature && !txt) {
				feature.titleElem.removeClass("displayNone");
			} else {
				feature.titleElem.addClass("displayNone");
			}
		}
	}
	// action for blur of search-field
    function searchFieldBlur(field) {
		var input = field[0];
		if (!input._hasFocus && !input.value) {
			$(".searchHint").removeClass("displayNone");
			$(".searchClearIcon").removeClass("searchClearIconValue");
		}
	}
    function searchHighlight(down) {
		var samples = $(".navCategoryFeatures").find(".navSample").not(".displayNone"), max = samples.length - 1;
		if (max < 0) {
			return;
		}
		var old = $(".searchHighlightItem"), i = samples.index(old);
		if (i >= 0) {
			old.removeClass("searchHighlightItem");
			i += down ? 1 : -1;
		}
		$(samples[Math.max(0, Math.min(max, i))]).addClass("searchHighlightItem");
	}
    function searchSelect(down) {
		var item = $(".searchHighlightItem"), a = item.find("a");
		if (a.length === 1) {
			item.addClass("listItemSelected");
			_navigate(a[0].href, a);
		}
	}
	// attach events to elements related to search of menu
	function searchInit(onlyIfVisible) {
		var elem, field = $("#searchField"), input = field[0];
		if (!input || (onlyIfVisible && !input.offsetWidth)) {
			return;
		}
		// try to figure out if that is main page and search appeared while browser-resize:
		// do not take focus away from sample or from getting-started
		elem = $("#HomePageDesc")[0];
		if (!input._hasFocus && elem && elem.offsetWidth) {
            setTimeout(function () { try { input.focus(); } catch (ignore) { } }, 10);
		}
		if (input._init) {
			return;
		}
		input._all = input._init = true;
		if (input.value) {
			try {
				searchSamples();
				/* VS 12/04/2013 removed */
				//ensureSelectedItemVisible();
            } catch (ignore) { }
		} else {
			input._lastTxt = "";
		}
		field.bind({
			focus: function () {
				input._hasFocus = true;
			}, blur: function () {
				input._hasFocus = false;
				searchFieldBlur(field);
				if (input._timer) {
					clearInterval(input._timer);
					input._timer = null;
				}
			}, keydown: function (e) {
				var key = e.keyCode || e.which;
				if (_firefox && !input._timer && (key === 0 || key === 229)) {
					input._timer = setInterval(function () {
						if (input.value !== input._lastTxt) {
							searchSamples();
						}
					}, 100);
				}
				// not +-,.'
				if ((key < 187 || key > 190) && key < 222) {
					// 234567[]?; etc.
					if ((key >= 50 && key <= 55) || key > 180) {
						try {
							e.preventDefault();
							e.stopPropagation();
						} catch (ignore) { }
					}
				}
				if (input._lastTxt) {
					if (key === 13) {
						searchSelect();
					}
					if (key === 38 || key === 40) {
						searchHighlight(key === 40);
						return;
					}
				}
				setTimeout(function () {
					searchSamples();
				}, 10);
			}, paste: function () {
				setTimeout(function () {
					searchSamples();
				}, 10);
			}, cut: function () {
				setTimeout(function () {
					searchSamples();
				}, 10);
			}, drop: function () {
				setTimeout(function () {
					searchSamples();
				}, 10);
			}
		});
		$(".searchToggleButton").click(function () {
			$(".searchToggleButton").removeClass("searchToggleSelected");
			$(this).addClass("searchToggleSelected");
			searchSamples(this.className.indexOf("All") > 0);
		});
		$(".searchClearIcon").click(function () {
			input.value = "";
			searchSamples();
		}).mousedown(function (e) {
			e.preventDefault();
		});
		$(".searchIcon").click(function () {
			input.focus();
		}).mousedown(function (e) {
			e.preventDefault();
		});
		$(".searchHint").click(function () {
			input.focus();
		}).mousedown(function (e) {
			e.preventDefault();
		});
	}

    //Open the hamburger menu
    $("#hamburger_click").click(function () {
        hideFeatures();
        try {

            //set the width of primary content container -> content should not scale while animating
            var body = $('body');
            var contentLayer = $('#contentLayer');
            var sbContainer = $("#sampleBrowserContainer");
            var mainContainer = $("#mainContainer");
            var tempContainer = $(".tempContainer");
            var hamburgerMenu = $('.hamburgerMenu');
            var sbHeader = $('.sbHeader');
            var sbFooter = $('.footerArea');

            if (hamburgerMenu && hamburgerMenu.css("display") != 'none')
            { contentLayerClick(); return; }            

            var containerMinWidth = tempContainer ? tempContainer.css("min-width") : 0;
            var containerMaxWidth = sbContainer ? sbContainer.css("max-width") : 0;
            var containerMaxWidthFloat = parseFloat(containerMaxWidth);
            var containerMinWidthFloat = parseFloat(containerMinWidth);

            var bodyWidth = body ? body.width() : 0;
            var mainContainerWidth = tempContainer ? tempContainer.css('width') : containerMinWidth;
            var navWidth = Math.min(containerMaxWidthFloat - parseFloat(containerMinWidth), bodyWidth * .85);
            var overlayWidth = bodyWidth < containerMaxWidthFloat ? bodyWidth - navWidth : mainContainerWidth;

            var sbHeaderWidth = bodyWidth >= containerMaxWidthFloat ? containerMaxWidthFloat : bodyWidth;
            sbHeader ? sbHeader.width(sbHeaderWidth) : "";
            sbFooter ? sbFooter.width(bodyWidth) : "";

            var mainContainerOffset = mainContainer.offset();
            var mainContainerLeft = mainContainerOffset.left;
            var mainContainerTop = mainContainerOffset.top;
            var hamburgerLeft = (bodyWidth - containerMaxWidthFloat) / 2;
            hamburgerLeft = hamburgerLeft < 0 ? 0 : hamburgerLeft;

            //set the content with the width that it has originally                           
            var hamburgerMenuWidth = navWidth >= hamMinWidth ? navWidth : hamMinWidth;
            var containerNewMargin = bodyWidth >= containerMinWidthFloat ? hamburgerMenuWidth / 2 : hamburgerLeft;

            mainContainer.css('margin-left', containerNewMargin).width(containerMinWidth).css('float', 'left');
            hamburgerMenu.css('z-index', '-1').css('position', 'absolute').css("left", mainContainerLeft).css('top', mainContainerTop).css('display', 'block').css('height', mainContainer.height()).css('float', 'left');
            var currHamburgerMenuWidth = hamburgerMenu.width();
            var newHamburgerMenuWidth = hamburgerMenuWidth > currHamburgerMenuWidth ? hamburgerMenuWidth + (hamburgerMenuWidth - currHamburgerMenuWidth) : currHamburgerMenuWidth;
            newHamburgerMenuWidth = newHamburgerMenuWidth >= hamMinWidth ? newHamburgerMenuWidth : hamMinWidth;
            hamburgerMenu.css('min-width', newHamburgerMenuWidth);
            sbContainer.css('width', containerMaxWidth);

            //display a layer to disable clicking and scrolling on the content while menu is shown
            if (bodyWidth >= containerMaxWidthFloat)
                contentLayer.css('display', 'none');
            else if (contentLayer) {
                var mainContainerOffset = mainContainer.offset();
                var contentLayerLeft = navWidth;
                var contentLayerTop = mainContainerOffset ? mainContainerOffset.top : 0;
                contentLayer.width(overlayWidth).css('display', 'block').css("left", contentLayerLeft).css("top", contentLayerTop);
                
                //disable all scrolling on mobile devices while menu is shown
                contentLayer.bind('touchmove', function (e) { e.preventDefault(); });
            }

            // Clip the content on the right if there is not enough space
            body.css("overflow-x", "hidden");

            mainContainer.animate({ "margin-left": [hamburgerMenuWidth, 'easeOutExpo'] },
                                  { duration: 400, queue: false });
            hamburgerMenu.animate({ "left": [hamburgerLeft, 'easeOutExpo'] },
                                  {
                                      duration: 400, queue: false,
                                      complete: function () {
                                          mainContainer.css('float', 'left').css('margin', '0 auto');
                                          hamburgerMenu.css('float', 'left').css('position', 'relative').css('min-width', hamMinWidth).width(hamburgerMenuWidth).css('top', 0).css('left', 0).css('z-index', '0');
                                          if (bodyWidth >= containerMaxWidthFloat && contentLayer && contentLayer.css('display') != 'none') {
                                              var mainContainerOffset = mainContainer.offset();
                                              var contentLayerLeft = mainContainerOffset ? mainContainerOffset.left : 0;
                                              var contentLayerTop = mainContainerOffset ? mainContainerOffset.top : 0;
                                              contentLayer.css("left", contentLayerLeft);
                                              contentLayer.css("top", contentLayerTop);
                                          }

                                          if (initSelected) {
                                              var currSelElems = $('li.listItemSelected');
                                              var currSelItem = currSelElems && currSelElems.length > 0 ? currSelElems[0] : null;
                                              //currSelItem ? scrollToElem('.hamburgerMenu', currSelItem) : "";
                                              initSelected = null;
                                          }

                                          closeHamMenu = false;
                                      }
                                  });
        }
        catch (ex) { }
        /* VS 12/04/2013 removed */
        //ensureSelectedItemVisible();
		  searchInit();
        setTimeout(function () {
            fixMenuVertLayout(true);
        }, 300);
    });

    //close the hamburger menu
    $("#contentLayer").click(contentLayerClick = function () {
        try {
            var body = $('body');
            var sbContainer = $("#sampleBrowserContainer");
            var contentLayer = $('#contentLayer');
            var mainContainer = $("#mainContainer");
            var tempContainer = $(".tempContainer");
            var hamburgerMenu = $('.hamburgerMenu');
            var sbHeader = $('.sbHeader');
            var sbFooter = $('.footerArea');

            var containerMinWidth = tempContainer ? tempContainer.css("min-width") : 0;
            var containerMaxWidth = sbContainer ? sbContainer.css("max-width") : 0;
            var containerMaxWidthFloat = parseFloat(containerMaxWidth);
            var containerMinWidthFloat = parseFloat(containerMinWidth);

            //enable all scrolling on mobile devices when menu is closed
            contentLayer ? contentLayer.unbind('touchmove') : "";

            if (hamburgerMenu && sbContainer && mainContainer && body) {
                // Compute the original margin
                var contentWidth = mainContainer ? mainContainer.width() : 0;
                var bodyWidth = body.width();
                var marginSize = Math.max(0, (bodyWidth - contentWidth) / 2);

                var mainContainerOffset = mainContainer.offset();
                var mainContainerLeft = mainContainerOffset.left;
                var mainContainerTop = mainContainerOffset.top;
                var hamburgerCurrLeft = hamburgerMenu.offset().left;
                var hamburgerLeft = (bodyWidth - parseFloat(contentWidth)) / 2;
                hamburgerLeft = hamburgerLeft < 0 ? 0 : hamburgerLeft;

                var hamburgerMenuWidth = hamburgerMenu.width();
                mainContainer.css('float', 'none').css('margin-left', hamburgerMenuWidth);
                hamburgerMenu.css('z-index', '-1').css("position", "absolute").css("left", hamburgerCurrLeft).css('top', mainContainerTop);
                var currHamburgerMenuWidth = hamburgerMenu.width();
                var newHamburgerMenuWidth = hamburgerMenuWidth > currHamburgerMenuWidth ? hamburgerMenuWidth + (hamburgerMenuWidth - currHamburgerMenuWidth) : currHamburgerMenuWidth;
                hamburgerMenu.css('min-width', newHamburgerMenuWidth);

                var containerNewWidth = bodyWidth >= containerMinWidthFloat ? containerMinWidthFloat : bodyWidth;                
                mainContainer.width(containerNewWidth);
                $("#sampleContainer").width("auto");
                
                //sbContainer.width(containerNewWidth);

                var containerNewMargin = bodyWidth >= containerMaxWidthFloat ? hamburgerMenuWidth / 2 : hamburgerLeft;

                mainContainer.animate({ "margin-left": [containerNewMargin, 'easeOutExpo'] },
                                  { duration: 400, queue: false });
                hamburgerMenu.animate({ "left": [hamburgerLeft, 'easeOutExpo'] },
                                      {
                                          duration: 400, queue: false,
                                          complete: function () {
                                              hamburgerMenu.css('display', 'none').css('z-index', '0').css('min-width', hamburgerMenuWidth);
                                              SetSBContainerWidth(containerMinWidth, containerMaxWidth);
                                              mainContainer.width("auto").css('margin', '0 auto');
                                              contentLayer ? contentLayer.css('display', 'none').css('left', 'auto').css('top', 'auto') : "";
                                              body.css("overflow-x", "auto");
                                              sbHeader ? sbHeader.width("auto") : "";
                                              sbFooter ? sbFooter.width("auto") : "";
                                              closeHamMenu = true;
                                          }
                                      });
            }
        }
        catch (ex) { }
    });

	// initialize search events only when menu is visible
	setTimeout(function () {
		searchInit(true);
	}, 100);

    // Open/Close the navCategoryFeatures menu of navCategoryTitle
    $(".navCategoryTitle").click(function () {
        OpenCloseMenuItem($(this), ".navCategoryFeatures", ".hamburgerMenu", true);
    });

    // Open/Close the navControl menu of navControlHeader
    $(".navControlHeader").click(function () {
        OpenCloseMenuItem($(this), ".navControlsList", ".hamburgerMenu");
    });

    // Open/Close the navSampleGroups menu of controlTitle
    $(".navControlTitle").click(function () {
        OpenCloseMenuItem($(this), ".navSampleGroupsList", ".hamburgerMenu");
    });

    // Open/Close the navSamples menu of navSampleGroup
    $(".navSampleGroupTitle").click(function () {
        OpenCloseMenuItem($(this), ".navSamplesList", ".hamburgerMenu");
    });

	/* VS 12/04/2013 removed */
	/*
	function ensureSelectedItemVisible() {
		var currSel = $('li.listItemSelected')[0];
		if (currSel) try {
			if (!_focusElem) {
				_focusElem = $("<input type='button' />").css({
					width: "1px",
					height: "1px",
					border: "0px",
					outline: "0px",
					zIndex: -1,
					opacity: 0,
					position: "absolute"
				});
			}
			var winHeight = Math.min(document.documentElement.clientHeight || 100, document.body.clientHeight || 100);
			_focusElem.css("marginTop", Math.floor(winHeight / 3) + "px");
			if (_focusElem[0].parentNode !== currSel) {
				_focusElem.appendTo(currSel);
			}
			if (currSel.offsetWidth)
				_focusElem[0].focus();
		} catch (ex) { }
	}
	*/

    /* End Hamburger Menu */


    $(document).ready(function () {
        initLoad = true;
        lastUrl = window.location.href;

        var hamburgerMenu = $(".hamburgerMenu");
        hamMinWidth = hamburgerMenu ? parseFloat(hamburgerMenu.css('min-width')) : 0;

        try {
            a = navigator.userAgent.toLowerCase();
            if (a.indexOf("firefox") > 0)
                _firefox = true;
            index = a.indexOf("msie ");
            if (index > 0) {
                isIE = true;
                index = parseFloat(a.substr(index + 5));
                if (index >= 10) {
                    index = parseFloat(document.documentMode);
                }
                isIE9 = index < 10;
                isIE8 = index < 9;
                isIE7 = index <= 7;
            }
            
            if (isIE)
                setInitialSettings(true);

            // Reload css for IE10
            //if (index > 0 && index == 10)
            //    ReloadStyleSheets();

            SetMobileFeatures();
        }
        catch (exc) { }

        // Store the js files on initial page load
        //StoreInitScripts(document.scripts);

        /* Code for Dynamic loading using history.js */
        History = window.History;
        if (History && !History.enabled) {
            // History.js is disabled for this browser.
            // This is because we can optionally choose to support HTML4 browsers or not.
            return false;
        }

        // codes below implement hover and selection behavior of list of samples
        var li, href, lastOver,             
            list = getNavigationLIs(),
            i = list.length;
        // find current url to select initial item in list
        if (!startUrl) {
            startUrl = window.MyAppUrlSettings;
            startUrl = startUrl ? startUrl.SampleContentURL : null;
        }
        // alternative/backup if MyAppUrlSettings failed
        //if (!startUrl) {
        //    startUrl = $("#sample-path");
        //    startUrl = startUrl.length === 1 ? startUrl.attr("href") : null;
        //}
        //index = startUrl ? startUrl.lastIndexOf("/") : -1;
        //if (index >= 0) {
        //    startUrl = startUrl.substring(index);
        //}
        // after igGrid with enabled filtering or gridGroupBy was loaded, a sample with html binding fails: set flag for that sample
        //if (startUrl === "/all-features" || startUrl === "/filtering") {
        //    // temporary comment: wait if igGrid will fix that bug
        //    //				fullPostbacks.push("grid/html-binding");
        //}
        // select initial list item and attach events to all list items
        while (i-- > 0) {
            li = list[i];
            // li._ig_events_ - flag to ensure that events are used/attached only once
            if (li._ig_events_ === true) {
                break;
            }
            li._ig_events_ = true;
            initSelected = li;
            li = $(li);
            a = li.find("a");            
            if (a.length !== 1) {
                continue;
            }
            // try to find initial url and select corresponding item in list
            href = startUrl ? a.attr("href") : null;
            index = href ? href.lastIndexOf(startUrl) : -1;
            if (startUrl && a.attr("href") === startUrl) {
            //if (index >= 0 && index + startUrl.length === href.length) {
                // link found: stop search
                startUrl = null;
                lastSelected = li[0];
                li.addClass("listItemSelected");

                if (history && history.pushState) {
                    var aSampleChild = a.children(".igsb-sampleTitle");
                    var sampleText = aSampleChild ? aSampleChild.text() : "";
                    prevTitle = sampleText ? sampleText.trim() : "";
                    prevControlTitle = GetControlTitle(a);

                    /* OK 10/16/2013 154893 - Map samples do not render title properly*/
                    var lowerAText = prevTitle.toLowerCase();
                    if (lowerAText.indexOf("overview") > -1 || prevTitle.indexOf("概要") > -1)
                        prevTitle = prevTitle.replace(prevControlTitle, "").trim();

                    var keywordMeta = $('[name="keywords"]'), keywordContent = "";
                    if (keywordMeta)
                        keywordContent = keywordMeta.attr("content");

                    // Get icon name for the control on the sample page
                    prevControlIconName = GetControlIconName();

                    // Store <style> tags of first loaded sample
                    prevStyleScripts = document.getElementsByTagName("style");

                    var histData = { currSelected: getNavigationLIs().index(li), sampleTitle: prevTitle, controlTitle: prevControlTitle, keywordContent: keywordContent };
                    // Temporarily disable dynamic loading everywhere
                    //History ? History.replaceState(histData, document.title, href) : "";
                    // if same page is reloaded more than once, then History.statechange fails to fire. To load correct sample: call event explicitly
                    if (ie9Bug === 1) {
                        historyChangeFunc();
                    }
                }
            }
            a.click(function (e) {
                a = $(this);
                if (a.length !== 1) {
                    return;
                }
                //toggleSampleFeatureList();

                href = a.attr('href');
                _navigate(href, a, e);
            }).focus(function (e) {
                // disable focus rectangle around clicked a
                document.body.focus();
            });
        }
        $(".navSampleApp a").focus(function () {
            // disable focus rectangle around clicked a
            document.body.focus();
        });
        // process click on feature-button to show drop-down list of samples

        //$("#featuredControlsTitle").click(function (e) {
        //    toggleControlListHeader($(this));
        //});
        //$("#allControlsTitle").click(function (e) {
        //    toggleControlListHeader($(this));
        //});
        //$("#prodNavCollapseButton").click(function (e) {
        //    toggleprodNavCollapse($(this));
        //});
        //$("#desktopIndexNav").click(function (e) {
        //    toggleprodNavCollapseControls($(this));
        //});
        //$("#mobileIndexNav").click(function (e) {
        //    toggleprodNavCollapseControls($(this));
        //});
        //$(document.body).click(function () {
        //    toggleSampleFeatureList();
        //}).keydown(function (evt) {
        //    if (evt.keyCode === 27) {
        //        toggleSampleFeatureList();
        //    }
        //});
        // instantiate tabs in responsive design
        prettyPrint();

        $(".jq-ui-tabs").tabs({

		});

        // add hover effects to non-tab navigation (similar to tab)
        $("li.no-tab").hover(function () {
            $(this).addClass("ui-state-hover");
        }, function () {
            $(this).removeClass("ui-state-hover");
        });

        // To fix issue with Mobile IE 10 and viewport width detection
        if (navigator.userAgent.match(/IEMobile\/10\.0/)) {
            var msViewportStyle = document.createElement("style");
            msViewportStyle.appendChild(
                document.createTextNode(
                    "@-ms-viewport{width:auto!important;zoom:1;user-zoom:fixed;}"
                )
            );
            document.getElementsByTagName("head")[0].
                appendChild(msViewportStyle);
        }
        fixMenuVertLayout(true);
    });
    initSelectBehavior();
});

// that method is called on initialization and on async history change by UpdateContent()
function initSelectBehavior() {
	if (isMobile()) {
		$(".codeViewerSelectAll").css("display", "none");
	} else {
		var codeBlocks = $("pre"), i = codeBlocks.length;
		while (i-- > 0) {
			if ($(codeBlocks[i].parentNode).hasClass("code-viewer")) {
				codeBlocks = codeBlocks.not(codeBlocks[i]);
			}
		}
		// do not use click in order to allow custom drag-select
		codeBlocks.mousedown(function (e) {
			this._x = e ? (e.clientX || e.pageX) : 0;
		}).mouseup(function (e) {
			var x = e ? (e.clientX || e.pageX) : 0;
			if (!x || !this._x || Math.abs(x - this._x) < 5) {
				selectContent(this);
			}
		});
	}
	// ensure that buttons have listeners
	// Note: global methods like
	//   $("body").on("click", ".codeViewerCollapsed", function (){...});
	// may fail in some mobile devices like Windows Phone.
	// Therefore, use explicit javascript handlers with validations if they were already attached.
	var elem = $(".codeViewerCollapsed");
	if (elem[0] && !elem[0].onclick) {
		elem[0].onclick = function () {
			toggleCodeViewerPopup(true);
		};
	}
	elem = $(".codeViewerPopupHideButton");
	if (elem[0] && !elem[0].onclick) {
		elem[0].onclick = function () {
			toggleCodeViewerPopup();
		};
	}
	// ensure that accordion was created
	elem = $("#codeViewerPopupAccordion");
	if (elem[0] && !elem.data("accordion")) {
		elem.accordion();
	}
}
function selectAllClick(elem) {
	var div, divs = $(elem.parentNode).find(".code-viewer"), i = divs.length;
	while (i-- > 0) {
		div = divs[i];
		if (div.offsetWidth > 10 && div.offsetHeight > 10) {
			break;
		}
	}
	var cv = div ? $(div).find("pre")[0] : null;
	if (cv && cv.offsetHeight) {
		selectContent(cv);
	}
}
function selectContent(elem) {
    try {
        var range;
        if (document.createRange) {
            range = document.createRange(), selection = document.getSelection();
            range.selectNodeContents(elem);
            selection.removeAllRanges();
            selection.addRange(range);
        }
        else if (document.body.createTextRange) {
            range = document.body.createTextRange();
            range.moveToElementText(elem);
            range.select();

        }
    } catch (ignore) { }
	try {
		document.execCommand("copy");
    } catch (ignore) { }
}
