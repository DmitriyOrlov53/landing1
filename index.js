!function(e){var t={};function n(i){if(t[i])return t[i].exports;var r=t[i]={i:i,l:!1,exports:{}};return e[i].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,i){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(i,r,function(t){return e[t]}.bind(null,r));return i},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=2)}([function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=n(1),r={Item:new i.ClassElem("nav__item"),HeaderNav:new i.ClassElem("header__nav"),Button:new i.ClassElem("nav__close-nav"),closeNav:function(){this.HeaderNav.removeClass("header__nav_active"),document.body.style.overflow="visible"},openNav:function(){this.HeaderNav.addClass("header__nav_active"),document.body.style.overflow="hidden"}};t.default=r,n(5)},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.ClassElem=void 0;var i=function(){function e(e){this.elements=Array.from(document.getElementsByClassName(e))}return e.prototype.get=function(e){return this.elements[e]},e.prototype.setEvent=function(e,t){this.elements.forEach((function(n){n.addEventListener(e,t)}))},e.prototype.deleteEvent=function(e,t){this.elements.forEach((function(n){n.removeEventListener(e,t)}))},e.prototype.toggleClass=function(e){this.elements.forEach((function(t){t.classList.toggle(e)}))},e.prototype.addClass=function(e){this.elements.forEach((function(t){t.classList.add(e)}))},e.prototype.removeClass=function(e){this.elements.forEach((function(t){t.classList.remove(e)}))},e}();t.ClassElem=i},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),n(3),n(0),n(6)},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),n(4)},function(e,t,n){"use strict";var i=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var r=n(1),c=i(n(0));new r.ClassElem("header__open-nav").setEvent("click",c.default.openNav.bind(c.default))},function(e,t,n){"use strict";var i=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var r=i(n(0));r.default.Item.setEvent("click",r.default.closeNav.bind(r.default)),r.default.Button.setEvent("click",r.default.closeNav.bind(r.default))},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),n(7)},function(e,t,n){"use strict";var i=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var r=i(n(8)),c=document.getElementsByClassName("switcher").item(0);if(null!=c){var s=new r.default(c);setInterval((function(){return s.nextSwitch()}),3e3)}},function(e,t,n){"use strict";var i=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var r=i(n(9)),c=function(){function e(e){var t=this;this.currentSwitchNumer=0;var n=Array.from(e.children);this.switches=n.map((function(e,n){return new r.default(e,t,n)})),this.switches[0].check(this.switches[0])}return e.prototype.nextSwitch=function(){this.currentSwitchNumer<this.switches.length-1?this.currentSwitchNumer++:this.currentSwitchNumer=0;var e=this.switches[this.currentSwitchNumer];e.checkAction.call(e)},e}();t.default=c},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t,n){this.checked=!1,this.checkedName="switcher__switch_checked",this.field=e,this.field.addEventListener("click",this.checkAction.bind(this)),this.parent=t,this.index=n}return e.prototype.checkAction=function(){this.checked?this.uncheck(this):(this.parent.beforeSwitch&&this.uncheck(this.parent.beforeSwitch),this.check(this),this.parent.currentSwitchNumer=this.index)},e.prototype.check=function(e){e.field.classList.add(this.checkedName),this.parent.beforeSwitch=e,e.checked=!0},e.prototype.uncheck=function(e){e.field.classList.remove(this.checkedName),e.checked=!1},e}();t.default=i}]);