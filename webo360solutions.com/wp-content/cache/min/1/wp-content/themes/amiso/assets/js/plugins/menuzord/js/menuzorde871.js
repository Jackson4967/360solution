(function($){jQuery.fn.menuzord=function(options){var settings;$.extend(settings={showSpeed:500,hideSpeed:300,trigger:"hover",showDelay:0,hideDelay:0,effect:"fade",align:"left",responsive:!0,animation:"none",indentChildren:!0,indicatorFirstLevel:"+",indicatorSecondLevel:"+",scrollable:!0,scrollableMaxHeight:'100%'},options);var menu_container=$(this);var menu=$(menu_container).children(".menuzord-menu");var menu_li=$(menu).find("li");var showHideButton;var mobileWidthBase=1024;var bigScreenFlag=2000;var smallScreenFlag=200;$(menu).children("li").children("a").each(function(){if($(this).siblings(".dropdown, .megamenu").length>0){$(this).append("<span class='indicator'>"+settings.indicatorFirstLevel+"</span>")}});$(menu).find(".dropdown").children("li").children("a").each(function(){if($(this).siblings(".dropdown").length>0){$(this).append("<span class='indicator'>"+settings.indicatorSecondLevel+"</span>")}});if(settings.align=="right"){$(menu).addClass("menuzord-right")}
if(settings.indentChildren){$(menu).addClass("menuzord-indented").addClass('menu-open')}
if(settings.responsive){showHideButton=$(menu_container).children(".showhide")}
if(settings.scrollable){if(settings.responsive){}}
function showDropdown(item){if(settings.effect=="fade")
$(item).children(".dropdown, .megamenu").stop(!0,!0).delay(settings.showDelay).fadeIn(settings.showSpeed).addClass(settings.animation);else $(item).children(".dropdown, .megamenu").stop(!0,!0).delay(settings.showDelay).slideDown(settings.showSpeed).addClass(settings.animation)}
function hideDropdown(item){if(settings.effect=="fade")
$(item).children(".dropdown, .megamenu").stop(!0,!0).delay(settings.hideDelay).fadeOut(settings.hideSpeed).removeClass(settings.animation);else $(item).children(".dropdown, .megamenu").stop(!0,!0).delay(settings.hideDelay).fadeOut(settings.hideSpeed).removeClass(settings.animation);$(item).children(".dropdown, .megamenu").find(".dropdown, .megamenu").stop(!0,!0).delay(settings.hideDelay).fadeOut(settings.hideSpeed)}
function landscapeMode(){$(menu).find(".dropdown, .megamenu").hide(0);if(navigator.userAgent.match(/Mobi/i)||window.navigator.msMaxTouchPoints>0||settings.trigger=="click"){$(".menuzord-menu > li > a, .menuzord-menu ul.dropdown li a").bind("click touchstart",function(e){e.stopPropagation();e.preventDefault();$(this).parent("li").siblings("li").find(".dropdown, .megamenu").stop(!0,!0).fadeOut(300);if($(this).siblings(".dropdown, .megamenu").css("display")=="none"){showDropdown($(this).parent("li"));return!1}else{hideDropdown($(this).parent("li"))}
window.location.href=$(this).attr("href")});$(document).bind("click.menu touchstart.menu",function(ev){if($(ev.target).closest(".menuzord").length==0){$(".menuzord-menu").find(".dropdown, .megamenu").fadeOut(300)}})}else{$(menu_li).bind("mouseenter",function(){showDropdown(this)}).bind("mouseleave",function(){hideDropdown(this)})}}
function portraitMode(){$(menu).find(".dropdown, .megamenu").hide(0);$(menu).find(".indicator").each(function(){if($(this).parent("a").siblings(".dropdown, .megamenu").length>0){$(this).bind("click",function(e){var $parent=$(this).closest('ul').siblings("a").find(".indicator");var $parent2=$(this).closest('ul').parent().closest('ul').siblings("a").find(".indicator");$(menu).find(".indicator").not(this).not($parent).not($parent2).removeClass("active");$(this).toggleClass("active");$(this).parent('a').parent('li').toggleClass("active");$(menu).scrollTo({top:45,left:0},600);if($(this).parent().prop("tagName")=="A"){e.preventDefault()}
if($(this).parent("a").siblings(".dropdown, .megamenu").css("display")=="none"){$(this).parent("a").siblings(".dropdown, .megamenu").delay(settings.showDelay).slideDown(settings.showSpeed);$(this).parent("a").parent("li").siblings("li").find(".dropdown, .megamenu").slideUp(settings.hideSpeed)}else{$(this).parent("a").siblings(".dropdown, .megamenu").slideUp(settings.hideSpeed);$(this).parent('a').parent('li').find(".dropdown, .megamenu").slideUp(settings.hideSpeed)}})}})}
function fixSubmenuRight(){var submenus=$(menu).children("li").children(".dropdown, .megamenu");if($(window).innerWidth()>mobileWidthBase){var menu_width=$(menu_container).outerWidth(!0);for(var i=0;i<submenus.length;i++){if($(submenus[i]).parent("li").position().left+$(submenus[i]).outerWidth()>menu_width){$(submenus[i]).css("right",0)}else{if(menu_width==$(submenus[i]).outerWidth()||(menu_width-$(submenus[i]).outerWidth())<20){$(submenus[i]).css("left",0)}
if($(submenus[i]).parent("li").position().left+$(submenus[i]).outerWidth()<menu_width){$(submenus[i]).css("right","auto")}}}}}
function showMobileBar(){$(showHideButton).show(0).click(function(){if($(menu).css("display")=="none"){$(menu).addClass('menu-open').removeClass('menu-open').slideDown(settings.showSpeed)}else{$(menu).removeClass('menu-open').addClass('menu-open').slideUp(settings.hideSpeed,function(){});$(menu).find(".indicator").removeClass("active")}})}
function hideMobileBar(){$(menu).show(0);$(showHideButton).hide(0)}
function unbindEvents(){$(menu_container).find("li, a").unbind();$(document).unbind("click.menu touchstart.menu")}
function menuTabs(){function startTab(tab){var TabNavs=$(tab).find(".menuzord-tabs-nav > li");var TabContents=$(tab).find(".menuzord-tabs-content");$(TabNavs).bind("click touchstart",function(e){e.stopPropagation();e.preventDefault();$(TabNavs).removeClass("active");$(this).addClass("active");$(TabContents).hide(0);$(TabContents[$(this).index()]).show(0)})}
if($(menu).find(".menuzord-tabs").length>0){var menuTabs=$(menu).find(".menuzord-tabs");for(var i=0;i<menuTabs.length;i++){startTab(menuTabs[i])}}}
function windowWidth(){return window.innerWidth||document.documentElement.clientWidth||document.body.clientWidth}
function startMenu(){fixSubmenuRight();if(windowWidth()<=mobileWidthBase&&bigScreenFlag>mobileWidthBase){unbindEvents();if(settings.responsive){showMobileBar();portraitMode()}else{landscapeMode()}}
if(windowWidth()>mobileWidthBase&&smallScreenFlag<=mobileWidthBase){unbindEvents();hideMobileBar();landscapeMode()}
bigScreenFlag=windowWidth();smallScreenFlag=windowWidth();menuTabs();if(/MSIE (\d+\.\d+);/.test(navigator.userAgent)&&windowWidth()<mobileWidthBase){var ieversion=new Number(RegExp.$1);if(ieversion==8){$(showHideButton).hide(0);$(menu).show(0);unbindEvents();landscapeMode()}}}
startMenu();$(window).resize(function(){var t=setTimeout(function(){startMenu()},400);fixSubmenuRight()})}}(jQuery))