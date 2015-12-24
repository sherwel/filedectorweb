﻿/*!@license
* Infragistics.Web.ClientUI Popover localization resources 15.2.20152.1027
*
* Copyright (c) 2011-2015 Infragistics Inc.
*
* http://www.infragistics.com/
*
*/
(function($){$.ig=$.ig||{};if(!$.ig.Popover){$.ig.Popover={};$.extend($.ig.Popover,{locale:{popoverOptionChangeNotSupported:"Changing the following option after igPopover has been initialized is not supported:",popoverShowMethodWithoutTarget:"The target parameter of the show function is mandatory when the selectors option is used"}})}})(jQuery);/*!@license
 * Infragistics.Web.ClientUI jQuery Popover 15.2.20152.1027
 *
 * Copyright (c) 2013-2015 Infragistics Inc.
 *
 * http://www.infragistics.com/
 *
 * Depends on:
 *  jquery-1.4.2.js
 *  jquery.ui.core.js
 *  jquery.ui.widget.js
 *  infragistics.util.js
 */
if(typeof jQuery!=="function"){throw new Error("jQuery is undefined")}(function($){$.widget("ui.igPopover",{css:{baseClasses:"ui-widget ui-igpopover",arrowBaseClass:"ui-igpopover-arrow ui-igpopover-arrow-",closeButtonClass:"ui-icon ui-icon-closethick ui-igpopover-close-button",titleClass:"ui-igpopover-title"},options:{closeOnBlur:true,direction:"auto",position:"auto",width:null,height:null,minWidth:60,maxWidth:200,maxHeight:200,animationDuration:150,contentTemplate:null,selectors:null,headerTemplate:{closeButton:false,title:null},showOn:"mouseenter",containment:null,appendTo:"body"},events:{showing:"showing",shown:"shown",hiding:"hiding",hidden:"hidden"},_create:function(){this._target=this.options.selectors===null||this.options.selectors===undefined?this.element:null;this._priorityDir=["bottom","top","right","left"];this._arrowDir=["top","bottom","left","right"];this._positions=["balanced","start","end"];this._directionIndex=-1;this._positionIndex=-1;this._forced=this.options.direction!=="auto"&&this.options.position!=="auto";this._visible=false},_createWidget:function(options,element){$.Widget.prototype._createWidget.apply(this,arguments);this.element=$(element);if(element&&element.nodeType!==undefined){this._renderPopover()}if(this.options.direction!=="auto"||this.options.position!=="auto"){this._getPrioritiesIndex()}},_setOption:function(key,value){switch(key){case"direction":this.options.direction=value;if(this.options.direction!=="auto"){this._getPrioritiesIndex()}this._forced=this.options.direction!=="auto"&&this.options.position!=="auto";break;case"position":this.options.position=value;if(this.options.position!=="auto"){this._getPrioritiesIndex()}this._forced=this.options.direction!=="auto"&&this.options.position!=="auto";break;case"contentTemplate":if(typeof value==="string"){this.options.contentTemplate=value}break;case"animationDuration":if(typeof value==="number"){this.options.animationDuration=value}break;case"containment":if(value instanceof jQuery){this.options.containment=value}break;case"closeOnBlur":this.options.closeOnBlur=value;break;case"headerTemplate":case"selectors":case"width":case"height":case"maxWidth":case"maxHeight":case"minWidth":case"showOn":throw new Error($.ig.Popover.locale.popoverOptionChangeNotSupported+" "+key)}},destroy:function(){this._detachEventsFromTarget();this.popover.remove();$.Widget.prototype.destroy.call(this);return this},id:function(){return this.element[0].id},container:function(){return this.contentInner},show:function(trg,content){var target=trg||this._target;if(content){this._setNewContent(content)}if(target===null){throw new Error($.ig.Popover.locale.popoverShowMethodWithoutTarget)}this._openPopover(target)},hide:function(){this._closePopover()},getContent:function(){return this.contentInner.html()},setContent:function(newCnt){if(typeof newCnt==="string"){this._setNewContent(newCnt)}},target:function(){if(this._currentTarget){return this._currentTarget}return null},getCoordinates:function(){var currPosition={left:0,top:0};currPosition.left=this.popover.css("left");currPosition.top=this.popover.css("top");return currPosition},setCoordinates:function(pos){this.popover.css({top:pos.top,left:pos.left})},_renderPopover:function(){this.popover=$("<div></div>").addClass(this.css.baseClasses);if(this.id()){this.popover.attr("id",this.id()+"_popover")}if(this.options.direction!=="auto"){this._getPrioritiesIndex();this.arrow=$("<div></div>").addClass(this.css.arrowBaseClass+this._arrowDir[this._directionIndex]).appendTo(this.popover);if(this.id()){this.arrow.attr("id",this.id()+"_popover_arrow")}}this.popover.appendTo(this.options.appendTo);this._attachEventsToTarget();this._createContentDiv()},_createContentDiv:function(){var cnt,currContent,rightMargin,isTouchDeviceWithIE=this._isTouchDevice()&&$.ig.util.isIE;cnt=$("<div></div>").css("position","relative").css("max-width",this.options.maxWidth).css("max-height",this.options.maxHeight).css("min-width",this.options.minWidth).css("width",isTouchDeviceWithIE?"auto":this.options.width||"auto").css("height",isTouchDeviceWithIE?"auto":this.options.height||"auto").addClass("ui-widget-content ui-corner-all").appendTo(this.popover);if(this.id()){cnt.attr("id",this.id()+"_popover_contentFrame")}if(this.options.headerTemplate!==null){if(this.options.headerTemplate.closeButton){var closeBtn=$("<div></div>").addClass(this.css.closeButtonClass).bind("click.popover",$.proxy(this._closeBtnClick,this)).appendTo(cnt);if(this.id()){closeBtn.attr("id",this.id()+"_popover_closeBtn")}}if(this.options.headerTemplate.title!==null){var title=$("<div></div>").addClass(this.css.titleClass).html(this.options.headerTemplate.title).appendTo(cnt);if(this.id()){title.attr("id",this.id()+"_popover_title")}}}currContent=this.options.contentTemplate;if((typeof currContent==="string"||!currContent)&&this._target){currContent=this.options.contentTemplate||this._target[0].title||""}else if(this.options.selectors!==null&&!this._target&&!currContent){this.options.contentTemplate=function(){return $(this).attr("title")}}else if(typeof currContent==="function"&&this._target){currContent=this.options.contentTemplate.call(this._target[0],function(){return})}rightMargin=this.options.headerTemplate.closeButton&&(this.options.headerTemplate.title===null||this.options.headerTemplate.title==="")?$(".ui-icon").width():null;this.contentInner=$("<div></div>").css("position","relative").css("margin-right",rightMargin).html(currContent).appendTo(cnt);if(this.id()){this.contentInner.attr("id",this.id()+"_popover_contentInner")}$("<div></div>").css("clear","both").appendTo(cnt)},_updateArrowDiv:function(nDir,idx,trg){var conDiv=this.contentInner.parent(),dims;if(!this.arrow){this.arrow=$("<div></div>").addClass(this.css.arrowBaseClass+this._arrowDir[idx]).appendTo(this.popover);if(this.id()){this.arrow.attr("id",this.id()+"_popover_arrow")}}else{this.arrow.removeClass("ui-igpopover-arrow-left ui-igpopover-arrow-right ui-igpopover-arrow-bottom ui-igpopover-arrow-top").addClass(this.css.arrowBaseClass+this._arrowDir[idx])}dims=this._getHiddenElementsDimensions([this.arrow,conDiv],trg);switch(nDir){case"top":conDiv.css({left:"",top:dims[0].height*-1,"float":""});this.arrow.css({left:"",top:"","float":""});break;case"bottom":conDiv.css({left:"",top:dims[0].height,"float":""});this.arrow.css({left:"",top:"","float":""});break;case"left":conDiv.css({left:dims[0].width*-1,top:"","float":"left"});this.arrow.css({left:"",top:"","float":"left"});break;case"right":conDiv.css({left:dims[0].width,top:"","float":"left"});this.arrow.css({left:"",top:"","float":"left"});break}this.oDir=nDir},_targetMouseLeave:function(){this._hoveredTarget=null;if(this.options.closeOnBlur===true){this._closePopover()}},_targetMouseMove:function(trg){var self=this;if(this._target){this._openPopover($(this._target))}else{$(trg.currentTarget).addClass("is-hover");setTimeout(function(){if(self._hoveredTarget===trg.currentTarget){self._openPopover($(trg.currentTarget));$(trg.currentTarget).removeClass("is-hover")}},self.options.animationDuration);this._hoveredTarget=trg.currentTarget}},_targetClick:function(trg){var t=this._target||trg.currentTarget;if($(t).data("onFocus")&&this.container().is(":visible")){this._closePopover();$(t).data("onFocus",false)}else{this._openPopover($(t));$(t).focus();$(t).data("onFocus",true)}},_targetBlur:function(trg){var t=this._target||trg.currentTarget,self=this;setTimeout(function(){if($(t).data("onFocus")){if(self.options.closeOnBlur===true){self._closePopover();$(t).data("onFocus",false)}}else{$(t).focus()}},10)},_focusin:function(trg){var t=this._target||trg.currentTarget;this._openPopover($(t))},_focusout:function(){if(this.options.closeOnBlur===true){this._closePopover()}},_closeBtnClick:function(event){this._closePopover();event.stopPropagation()},_attachEventsToTarget:function(){var self=this,t=this._target,showEvt,hideEvt,targetShowEvt,targetHideEvt;if(this.options.showOn&&this.options.showOn.match(/click|focus|mouseenter/)){switch(this.options.showOn){case"click":showEvt="click.popover";hideEvt="blur.popover";targetShowEvt=self._targetClick;targetHideEvt=self._targetBlur;break;case"focus":showEvt="focusin.popover";hideEvt="focusout.popover";targetShowEvt=self._focusin;targetHideEvt=self._focusout;break;case"mouseenter":showEvt="mouseenter.popover";hideEvt="mouseleave.popover";targetShowEvt=self._targetMouseMove;targetHideEvt=self._targetMouseLeave;break}}if(t&&(window.HTMLElement!==undefined&&(t instanceof HTMLElement||t instanceof jQuery)&&showEvt||typeof t[0]==="object"&&t[0].nodeType===1&&typeof t[0].style==="object"&&typeof t[0].ownerDocument==="object")){$(t).unbind(showEvt).bind(showEvt,$.proxy(targetShowEvt,this));$(t).unbind(hideEvt).bind(hideEvt,$.proxy(targetHideEvt,this))}else if(this.options.selectors&&showEvt){this.element.find(self.options.selectors).addBack().each(function(){var target=$(this)[0];if(target===self.element[0]){return}$(target).unbind(showEvt).bind(showEvt,$.proxy(targetShowEvt,self));$(target).unbind(hideEvt).bind(hideEvt,$.proxy(targetHideEvt,self))})}},_detachEventsFromTarget:function(){var t=this._target,self=this;if(t&&(window.HTMLElement!==undefined&&(t instanceof HTMLElement||t instanceof jQuery)||typeof t[0]==="object"&&t[0].nodeType===1&&typeof t[0].style==="object"&&typeof t[0].ownerDocument==="object")){$(t).unbind(".popover")}else if(this.options.selectors){this.element.find(self.options.selectors).addBack().each(function(){var target=$(this);$(target).unbind(".popover")})}},_positionPopover:function(trg){var i=0,fn,fnRes;if(this.options.direction==="auto"){do{this._updateArrowDiv(this._priorityDir[i],i,trg);fn="_"+this._priorityDir[i]+"Position";fnRes=this[fn](trg);i++}while(fnRes===false&&i<this._priorityDir.length);if(fnRes===false){return}}else{this._updateArrowDiv(this.options.direction,this._directionIndex,trg);fn="_"+this.options.direction+"Position";if(!this[fn](trg)){this._forced=true;do{this._updateArrowDiv(this._priorityDir[i],i,trg);fn="_"+this._priorityDir[i]+"Position";fnRes=this[fn](trg);i++}while(fnRes===false&&i<this._priorityDir.length);return}}},_findProperPosition:function(dir,x,trg){var fnRes,y,cDim,cPos,win=$(window),trgFDim,wScroll,boundary,countainmentBoundary,leftOffset,$containment,oParent=trg.offsetParent(),useParentOffset=false,rightOffset=trg.offset().left+trg.outerWidth(),parentRightOffset=oParent.offset().left+oParent.outerWidth();if(dir==="left"){cPos="left";cDim="outerWidth";wScroll=win.scrollLeft()}else{cPos="top";cDim="outerHeight";wScroll=win.scrollTop()}boundary=wScroll+(cDim==="outerWidth"?win.width():win.height());$containment=this.options.containment;if(this.options.containment){countainmentBoundary=$containment.offset()[cPos];if(cDim==="outerWidth"){countainmentBoundary=countainmentBoundary+$containment.outerWidth()}else{countainmentBoundary=countainmentBoundary+$containment.outerHeight()}if(boundary>countainmentBoundary){boundary=countainmentBoundary}}if(trg.offset()[cPos]+trg[cDim]()>boundary){trgFDim=boundary-trg.offset()[cPos]}else if(cPos==="left"&&trg.offset()[cPos]<oParent.offset()[cPos]&&rightOffset>parentRightOffset){trgFDim=oParent[cDim]();useParentOffset=true}else if(cPos==="left"&&trg.offset()[cPos]<parentRightOffset&&rightOffset>parentRightOffset){trgFDim=parentRightOffset-trg.offset()[cPos]}else if(cPos==="left"&&trg.offset()[cPos]<oParent.offset()[cPos]&&oParent.offset()[cPos]<rightOffset){trgFDim=rightOffset-oParent.offset()[cPos];useParentOffset=true}else{trgFDim=trg[cDim]()}if(trgFDim>this.popover[cDim]()){leftOffset=useParentOffset?oParent.offset()[cPos]:trg.offset()[cPos];y=leftOffset+trgFDim/2-this.popover[cDim]()/2;fnRes=dir==="left"?this._checkCollision(x,y,trg):this._checkCollision(y,x,trg)}else{fnRes=this._cyclePossiblePositions(trg,dir,cPos,cDim,trgFDim,useParentOffset,x)}if(fnRes===false&&!this.options.containment){fnRes=this._cyclePossiblePositions(trg,dir,cPos,cDim,trgFDim,useParentOffset,x,true)}if(fnRes===true){this._adjustArrowPosition(trg,dir,cPos,cDim,trgFDim,useParentOffset)}return fnRes},_cyclePossiblePositions:function(trg,dir,cPos,cDim,trgFDim,useParentOffset,x,useDocument){var i=0,y,tPos,fnRes;if(this.options.position==="auto"){do{tPos=this._positions[i];y=this._getCounterPosition(trg,trgFDim,tPos,cPos,cDim,useParentOffset);fnRes=dir==="left"?this._checkCollision(x,y,trg,useDocument):this._checkCollision(y,x,trg,useDocument)}while(fnRes===false&&++i<this._positions.length)}else{y=this._getCounterPosition(trg,trgFDim,this.options.position,cPos,cDim,useParentOffset);fnRes=dir==="left"?this._checkCollision(x,y,trg,useDocument):this._checkCollision(y,x,trg,useDocument)}return fnRes},_getCounterPosition:function(trg,trgFDim,tPos,cPos,cDim,useParentOffset){var y,offset=useParentOffset?trg.offsetParent().offset()[cPos]:trg.offset()[cPos];switch(tPos){case"balanced":y=offset+trgFDim/2-this.popover[cDim]()/2;break;case"start":y=offset;break;case"end":y=offset-this.popover[cDim]()+trgFDim;break}return y},_topPosition:function(trg){var top=trg.offset().top-this.popover.outerHeight(),parentTop=trg.offsetParent().offset().top-this.popover.outerHeight();if(top<parentTop){top=parentTop}return this._findProperPosition("left",top,trg)},_bottomPosition:function(trg){var bottom=trg.offset().top+trg.outerHeight(),parentBottom=trg.offsetParent().offset().top+trg.offsetParent().outerHeight();if(bottom>parentBottom){bottom=parentBottom}return this._findProperPosition("left",bottom,trg)},_leftPosition:function(trg){var left=trg.offset().left-this.popover.outerWidth(),parentLeft=trg.offsetParent().offset().left-this.popover.outerWidth();if(left<parentLeft){left=parentLeft}return this._findProperPosition("top",left,trg)},_rightPosition:function(trg){var right=trg.offset().left+trg.outerWidth(),parentRight=trg.offsetParent().offset().right+trg.outerWidth();if(right>parentRight){right=parentRight}return this._findProperPosition("top",right,trg)},_checkCollision:function(top,left,trg,useDocument){var tfullw=this.popover.outerWidth(),tfullh=this.popover.outerHeight(),win=$(window),wh,ww,os,$containment,rightBoundary,bottomBoundary,leftBoundary,topBoundary;ww=win.width()+win.scrollLeft();wh=win.height()+win.scrollTop();rightBoundary=ww;bottomBoundary=wh;leftBoundary=win.scrollLeft();topBoundary=win.scrollTop();$containment=this.options.containment;if(this.options.containment){if(leftBoundary<$containment.offset().left){leftBoundary=$containment.offset().left}if($containment.offset().left+$containment.outerWidth()<rightBoundary){rightBoundary=$containment.offset().left+$containment.outerWidth()}if(bottomBoundary>$containment.offset().top+$containment.outerHeight()){bottomBoundary=$containment.offset().top+$containment.outerHeight()}if(topBoundary<$containment.offset().top){topBoundary=$containment.offset().top}}if(useDocument){leftBoundary=0;rightBoundary=$(document).width();bottomBoundary=$(document).height();topBoundary=0}if(left<leftBoundary){if(this.oDir==="left"){return false}left=leftBoundary}if(trg.offset().left+tfullw/2>rightBoundary&&this.options.direction!=="right"){left=rightBoundary-tfullw}if(trg.offset().top+tfullh+this.arrow.height()>bottomBoundary&&this.oDir==="bottom"||trg.offset().top-tfullh-this.arrow.height()<topBoundary&&this.oDir==="top"){if(this.options.selectors){return false}}if(left<leftBoundary||left+tfullw>rightBoundary||top<topBoundary||top+tfullh>bottomBoundary){if(this._forced===false){return false}}if(!$(this.options.appendTo).is("body")&&this._target){os=$.ig.util.getRelativeOffset(this.popover);top=top-os.top;left=left-os.left}this.popover.css({top:top,left:left});return true},_getPrioritiesIndex:function(){var i;if(this.options.direction!=="auto"){for(i=0;i<this._priorityDir.length;i++){if(this.options.direction===this._priorityDir[i]){this._directionIndex=i;break}}}if(this.options.position!=="auto"){for(i=0;i<this._positions.length;i++){if(this.options.position===this._positions[i]){this._positionIndex=i;break}}}},_openPopover:function(trg){var args,noCancel,val=this.getContent(),self=this,contentFunc;args={element:trg,content:val,popover:this.popover,owner:this};$(this.popover).data("isAnimating",true);noCancel=this._trigger(this.events.showing,this,args);if(noCancel===true){self._restoreOriginalTitle(self._currentTarget);if(args.content!==val){this._setNewContent(args.content)}else if(typeof this.options.contentTemplate==="function"){contentFunc=this.options.contentTemplate;args.content=contentFunc.call(trg[0],function(){return});this._setNewContent(args.content||"")}this._positionPopover(trg);this._currentTarget=trg;$(this.popover).data("isAnimating",false);this.popover.stop(true,true).fadeIn(this.options.animationDuration,function(){self._trigger(self.events.shown,self,args)});this._visible=true;this._removeOriginalTitle(trg)}},_closePopover:function(){var args,noCancel,self=this;args={element:this._currentTarget,content:this.getContent(),popover:this.popover,owner:this};$(this.popover).data("isAnimating",true);noCancel=this._trigger(this.events.hiding,this,args);if(noCancel===true){$(this.popover).data("isAnimating",false);this.popover.stop(true,true).fadeOut(this.options.animationDuration,function(){self._trigger(self.events.hidden,self,args)});this._visible=false}},_mouseenter:function(e){this._removeOriginalTitle($(e._currentTarget))},_removeOriginalTitle:function(element){while(element.length&&!element.is("body")){if(element.attr("title")){element.data("popover-title",element.attr("title"));element.attr("title","")}element=element.parent()}},_restoreOriginalTitle:function(element){if(element&&element.data("popover-title")){element.attr("title",element.data("popover-title"));element.removeData("popover-title")}},_adjustArrowPosition:function(trg,dir,cPos,cDim,trgFDim,useParentOffset){var offset={left:0,top:0},left,leftOffset=useParentOffset?trg.offsetParent().offset()[cPos]:trg.offset()[cPos];if(!$(this.options.appendTo).is("body")&&this._target){offset=$.ig.util.getRelativeOffset(this.popover)}if(dir==="top"){this.arrow.css({top:trg.offset()[cPos]-parseInt(this.popover.css(cPos),10)-offset.top+trgFDim/2-this.arrow.height()/2})}else{left=leftOffset-parseInt(this.popover.css(cPos),10)-offset.left+trgFDim/2;left=left<parseInt(this.arrow.css("border-left-width"),10)?parseInt(this.arrow.css("border-left-width"),10):left;this.arrow.css({left:left})}},_getHiddenElementsDimensions:function(elArr,trg){var dim=[],i,elem;if(this.options.containment===null){this.popover.css("left",trg.position().left);this.popover.css("top",trg.position().top)}if(!this._visible){this.popover.show()}for(i=0;i<elArr.length;i++){elem=elArr[i];dim.push({width:elem.outerWidth(),height:elem.outerHeight()})}if(!this._visible){this.popover.hide()}return dim},_setNewContent:function(nc){var newContent=nc;if(nc instanceof jQuery){newContent=nc.html()}else if(typeof nc==="object"){newContent=nc.innerHTML}this.contentInner.html(newContent)},_isTouchDevice:function(){return"ontouchstart"in window||navigator.MaxTouchPoints>0||navigator.msMaxTouchPoints>0}});if(!$.fn.addBack){$.fn.addBack=function(selector){return this.add(selector===null||selector===undefined?this.prevObject:this.prevObject.filter(selector))}}$.extend($.ui.igPopover,{version:"15.2.20152.1027"})})(jQuery);(function($){$(document).ready(function(){var wm=$("#__ig_wm__").length>0?$("#__ig_wm__"):$('<div id="__ig_wm__"></div>').appendTo(document.body);wm.css({position:"fixed",bottom:0,right:0,zIndex:1e3}).addClass("ui-igtrialwatermark")})})(jQuery);